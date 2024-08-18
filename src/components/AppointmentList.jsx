import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

// Helper function to generate 30-minute time slots
const generateTimeSlots = (startTime, endTime) => {
  const slots = [];
  let start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  while (start < end) {
    const nextSlot = new Date(start.getTime() + 30 * 60000); // Add 30 minutes
    slots.push(
      `${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')} - ${nextSlot.getHours().toString().padStart(2, '0')}:${nextSlot.getMinutes().toString().padStart(2, '0')}`
    );
    start = nextSlot;
  }

  return slots;
};

// Modal component
const Popup = ({ onClose, doctorId, appointmentId, updateAppointmentStatus }) => {
  const [availableDays, setAvailableDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const doctorRef = doc(db, "Doctors", doctorId);
        const doctorSnap = await getDoc(doctorRef);
        if (doctorSnap.exists()) {
          const doctorData = doctorSnap.data();
          const daysArray = doctorData.days.split(", ");
          setAvailableDays(daysArray);

          const slots = generateTimeSlots(doctorData.checkupStartTime, doctorData.checkupEndTime);
          setTimeSlots(slots);
        } else {
          console.error("No such doctor!");
        }
      } catch (error) {
        console.error("Error fetching doctor data: ", error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  const confirmAppointment = async () => {
    if (!selectedDay || !selectedTime ||!selectedDate) {
      alert("Please select a day, date and time.");
      return;
    }

    try {
      const appointmentRef = doc(db, "appointments", appointmentId);
      await updateDoc(appointmentRef, {
        status: "Confirmed",
        confirmedAt: serverTimestamp(),
        selectedDay,
        selectedTime,
        selectedDate
      });
      alert("Appointment confirmed.");
      updateAppointmentStatus(appointmentId, "Confirmed"); // Update parent state
      onClose(); // Close the popup
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
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="">-- Select a Day --</option>
            {availableDays.map((day, index) => (
              <option key={index} value={day.toLowerCase()}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="Date"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Select Date*
                </label>
                <input
                  id="Select_Date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="appearance-none block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>


        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium mb-2">
            Select Time:
          </label>
          <select
            id="time"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">-- Select a Time --</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
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
            onClick={confirmAppointment}
            disabled={!selectedDay || !selectedTime}
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

// Assuming doctorId is available in your AppointmentList component
const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

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

  const handleOpenPopup = (doctorId, appointmentId) => {
    setSelectedDoctorId(doctorId);
    setSelectedAppointmentId(appointmentId);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedDoctorId(null);
    setSelectedAppointmentId(null);
  };

  const updateAppointmentStatus = (appointmentId, status) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status }
          : appointment
      )
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl text-center pb-5 font-bold mb-4">Appointment Requests</h1>

      {appointments.length === 0 ? (
        <p>No appointment requests found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="mt-4 px-4 py-2 bg-darkgray text-white rounded-lg"
                onClick={() =>
                  handleOpenPopup(appointment.doctorId, appointment.id)
                }
                disabled={appointment.status === "Confirmed"}
              >
                {appointment.status === "Confirmed"
                  ? "Confirmed"
                  : "Confirm Appointment"}
              </button>
              {isPopupOpen && (
                <Popup
                  onClose={handleClosePopup}
                  doctorId={selectedDoctorId}
                  appointmentId={selectedAppointmentId}
                  updateAppointmentStatus={updateAppointmentStatus}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
