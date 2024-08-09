import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Ensure correct path
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'; // Import necessary Firestore functions

function AppointmentsData() {
  const [appointments, setAppointments] = useState([]);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoleAndAppointments = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        // Fetch the user's role from Firestore
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
            <p>Status: {appointment.status}</p>
            
          </div>
        ))
      )}
    </div>
  );
}

export default AppointmentsData;