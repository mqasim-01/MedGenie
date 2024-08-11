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
    <div className="appointments-list">
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map(appointment => (
          <div key={appointment.id} className="appointment-item bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-semibold">
              Appointment with {role === 'Doctor' ? `Patient: ${appointment.patientName}` : `Doctor: ${appointment.doctorName}`}
            </h3>
            <p>Time: {appointment.selectedTime}</p>
            <p>Day: {appointment.selectedDay}</p>
            <p>Date: {appointment.selectedDate}</p>
            <p>Status: {appointment.status}</p>
            <button 
              onClick={() => handleStartChat(appointment)} 
              className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-seablue to-seablue-200 text-white hover:font-bold rounded-full mt-4 lg:mt-0 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Start Chat
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AppointmentsData;
