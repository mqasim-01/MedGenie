import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; 
import { collection, getDocs, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'appointments'));
        const appointmentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setAppointments(appointmentsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const confirmAppointment = async (appointmentId) => {
    try {
      const appointmentRef = doc(db, 'appointments', appointmentId);
      await updateDoc(appointmentRef, {
        status: 'Confirmed',
        confirmedAt: serverTimestamp(),
      });
      alert('Appointment confirmed.');
      // Update the local state to reflect the confirmed status
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === appointmentId ? { ...appointment, status: 'Confirmed' } : appointment
        )
      );
    } catch (error) {
      console.error('Error confirming appointment: ', error);
      alert('Failed to confirm appointment. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Appointment Requests</h1>

      {appointments.length === 0 ? (
        <p>No appointment requests found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="border p-4 rounded-lg shadow-md">
              <p><span className="font-semibold">Patient Name:</span> {appointment.patientName}</p>
              <p><span className="font-semibold">Doctor Name:</span> {appointment.doctorName}</p>
              <p><span className="font-semibold">Status:</span> {appointment.status}</p>
              <button
                className="mt-4 px-4 py-2 bg-gradient-to-r from-seagreen to-seagreen-200 text-white rounded-lg"
                onClick={() => confirmAppointment(appointment.id)}
                disabled={appointment.status === 'Confirmed'}
              >
                {appointment.status === 'Confirmed' ? 'Confirmed' : 'Confirm Appointment'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
