import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase"; 
import { collection, getDocs } from "firebase/firestore";
import assets from "../assets/images";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Doctors"));
        const doctorsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setDoctors(doctorsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-gray min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-4">Doctors List</h1>

      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="w-[300px] h-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-darkgray transition-transform duration-300 ease-out transform hover:scale-105 cursor-pointer"
              onClick={() => handleDoctorClick(doctor)}
            >
              <div className="flex flex-col items-center p-4">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src={doctor?.photo || assets.Profile}
                  alt="profile"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {doctor.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Gender: </span> {doctor.gender}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Phone Number: </span> {doctor.phone}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Specialization: </span>{doctor.specialization}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Country: </span> {doctor.country}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Checkup Days: </span> {doctor.days}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Check up timing: </span> {doctor.checkupStartTime} to {doctor.checkupEndTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedDoctor && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <h2 className="text-2xl text-center font-bold mb-4">{selectedDoctor.name}</h2>
            <img
              className="mb-4 h-44 w-44 rounded-full shadow-lg mx-auto"
              src={selectedDoctor?.photo || assets.Profile}
              alt="profile"
            />
            <p className="text-base mb-2"><span className="font-semibold">Gender:</span> {selectedDoctor.gender}</p>
            <p className="text-base mb-2"><span className="font-semibold">Email:</span> {selectedDoctor.email}</p>
            <p className="text-base mb-2"><span className="font-semibold">Phone Number:</span> {selectedDoctor.phone}</p>
            <p className="text-base mb-2"><span className="font-semibold">Study:</span> {selectedDoctor.degree} - {selectedDoctor.specialization}</p>
            <p className="text-base mb-2"><span className="font-semibold">Institution:</span> {selectedDoctor.institute}</p>
            <p className="text-base mb-2"><span className="font-semibold">Country:</span> {selectedDoctor.country}</p>
            <p className="text-base mb-2"><span className="font-semibold">Nationality:</span> {selectedDoctor.nationality}</p>
            <p className="text-base mb-2"><span className="font-semibold">Description:</span> {selectedDoctor.description}</p>
            <p className="text-base mb-2"><span className="font-semibold">Checkup Days:</span> {selectedDoctor.days}</p>
            <p className="text-base mb-2"><span className="font-semibold">Check up timing:</span> {selectedDoctor.checkupStartTime} to {selectedDoctor.checkupEndTime}</p>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gradient-to-r from-seagreen to-seagreen-200 text-white rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-gradient-to-r from-seagreen to-seagreen-200 text-white rounded-lg"
                onClick={() => {
                  // Add any additional functionality for the new button here
                  console.log("Additional action");
                }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
