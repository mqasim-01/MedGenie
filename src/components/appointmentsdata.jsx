import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, doc, getDoc, getDocs, query, where, setDoc } from 'firebase/firestore';

function AppointmentsData() {
  const [appointments, setAppointments] = useState([]);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoleAndAppointments = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const patientDocRef = doc(db, 'Patients', currentUser.uid);
        const doctorDocRef = doc(db, 'Doctors', currentUser.uid);

        const patientDoc = await getDoc(patientDocRef);
        const doctorDoc = await getDoc(doctorDocRef);

        let userRole = '';
        if (patientDoc.exists()) {
          userRole = patientDoc.data()?.role;
        } else if (doctorDoc.exists()) {
          userRole = doctorDoc.data()?.role;
        }

        if (userRole) {
          setRole(userRole);

          let appointmentsQuery;
          const appointmentsRef = collection(db, 'appointments');

          if (userRole === 'Patient') {
            appointmentsQuery = query(appointmentsRef, where('patientId', '==', currentUser.uid));
          } else if (userRole === 'Doctor') {
            appointmentsQuery = query(appointmentsRef, where('doctorId', '==', currentUser.uid));
          }

          const snapshot = await getDocs(appointmentsQuery);
          const appointmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setAppointments(appointmentsData);
        }
      }

      setLoading(false);
    };

    fetchRoleAndAppointments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleStartChat = async (appointment) => {
    const chatId = `${appointment.patientId}_${appointment.doctorId}`;
    const chatRef = doc(db, 'chats', chatId);
  
    // Check if the chat already exists
    const chatDoc = await getDoc(chatRef);
    if (!chatDoc.exists()) {
      // Create the chat document with an empty messages array
      await setDoc(chatRef, {
        messages: []
      });
    }
  
    // Navigate to the chat page with the chat ID
    navigate(`/chat/${chatId}`);
  };
  return (
    <div className='py-6'>
      <h1 className="text-3xl text-center font-bold mb-4">Appoinmtments List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map(appointment => (
          <div key={appointment.id} className="bg-white p-6 rounded shadow-lg border-seablue border-2 hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-lg text-center font-semibold mb-2">
              {role === 'Doctor' ? `Patient Name: ${appointment.patientName}` : `Doctor Name: ${appointment.doctorName}`}
            </h3>
            <p><span className='font-semibold'>Time:</span> {appointment.selectedTime}</p>
            <p><span className='font-semibold'>Day:</span> {appointment.selectedDay}</p>
            <p><span className='font-semibold'>Date:</span> {appointment.selectedDate}</p>
            <p><span className='font-semibold'>Status:</span> {appointment.status}</p>
            <button 
              onClick={() => handleStartChat(appointment)} 
              className={`mt-4 rounded-full py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out 
              ${role === 'Doctor' ? 'bg-gradient-to-r from-seablue to-seablue-200 text-white hover:underline' : 'bg-gradient-to-r from-seagreen to-seagreen-200 text-white hover:underline'}
              hover:scale-105`}
            >
              Start Chat
            </button>
          </div>
        ))
      )}
    </div>
    </div>
  );
  
}

export default AppointmentsData;
