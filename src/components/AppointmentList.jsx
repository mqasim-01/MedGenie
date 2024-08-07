import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

// Modal component
const Popup = ({ onClose }) => {
  const [appointments, setAppointments] = useState([]);
  const confirmAppointment = async (appointmentId) => {
    try {
      const appointmentRef = doc(db, "appointments", appointmentId);
      await updateDoc(appointmentRef, {
        status: "Confirmed",
        confirmedAt: serverTimestamp(),
      });
      alert("Appointment confirmed.");
      // Update the local state to reflect the confirmed status
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === appointmentId
            ? { ...appointment, status: "Confirmed" }
            : appointment
        )
      );
    } catch (error) {
      console.error("Error confirming appointment: ", error);
      alert("Failed to confirm appointment. Please try again.");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Confirmation Details</h2>

        <div className="mb-4">
          <label htmlFor="days" className="block text-sm font-medium mb-2">
            Select Day:
          </label>
          <select
            id="days"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">-- Select a Day --</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium mb-2">
            Select Time:
          </label>
          <select
            id="time"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">-- Select a Time --</option>
            <option value="9am">9:00 AM</option>
            <option value="10am">10:00 AM</option>
            <option value="11am">11:00 AM</option>
            <option value="12pm">12:00 PM</option>
            <option value="1pm">1:00 PM</option>
            <option value="2pm">2:00 PM</option>
            <option value="3pm">3:00 PM</option>
            <option value="4pm">4:00 PM</option>
            <option value="5pm">5:00 PM</option>
            <option value="6pm">6:00 PM</option>
            <option value="7pm">7:00 PM</option>
            <option value="8pm">8:00 PM</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-gradient-to-r from-seagreen to-seagreen-200 text-white rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-r from-seagreen to-seagreen-200 text-white rounded-lg"
            onClick={() => confirmAppointment(appointments.id)}
            disabled={appointments.status === "Confirmed"}
          >
            {appointments.status === "Confirmed"
              ? "Confirmed"
              : "Confirm Appointment"}
          </button>
        </div>
      </div>
    </div>
  );
};

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "appointments"));
        const appointmentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
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

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
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
            <div
              key={appointment.id}
              className="border p-4 rounded-lg shadow-md"
            >
              <p>
                <span className="font-semibold">Patient Name:</span>{" "}
                {appointment.patientName}
              </p>
              <p>
                <span className="font-semibold">Doctor Name:</span>{" "}
                {appointment.doctorName}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {appointment.status}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-gradient-to-r from-seagreen to-seagreen-200 text-white rounded-lg"
                onClick={handleOpenPopup}
                disabled={appointment.status === "Confirmed"}
              >
                {appointment.status === "Confirmed"
                  ? "Confirmed"
                  : "Confirm Appointment"}
              </button>
              {isPopupOpen && <Popup onClose={handleClosePopup} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
