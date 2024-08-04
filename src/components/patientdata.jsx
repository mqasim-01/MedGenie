import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase"; // Adjust the path if necessary
import { collection, getDocs } from "firebase/firestore";
import assets from "../assets/images";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Patients"));
        const patientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPatients(patientsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const closeModal = () => {
    setSelectedPatient(null);
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
      <h1 className="text-3xl text-center font-bold mb-4">Patients List</h1>

      {patients.length === 0 ? (
        <p className="text-center">No patients found.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="w-[300px] h-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-darkgray transition-transform duration-300 ease-out transform hover:scale-105 cursor-pointer"
              onClick={() => handlePatientClick(patient)}
            >
              <div className="flex flex-col items-center p-6">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg object-cover"
                  src={patient?.photo || assets.Profile}
                  alt="profile"
                />
                <h5 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  {patient.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Gender: </span> {patient.gender}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Phone Number: </span> {patient.phone}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Blood Group: </span> {patient.bloodGroup}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Country: </span> {patient.country}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Address: </span> {patient.address}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPatient && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <h2 className="text-2xl text-center font-bold mb-4">{selectedPatient.name}</h2>
            <img
              className="mb-4 h-44 w-44 rounded-full shadow-lg mx-auto"
              src={selectedPatient?.photo || assets.Profile}
              alt="profile"
            />
            <p className="text-base mb-2"><span className="font-semibold">Gender:</span> {selectedPatient.gender}</p>
            <p className="text-base mb-2"><span className="font-semibold">Email:</span> {selectedPatient.email}</p>
            <p className="text-base mb-2"><span className="font-semibold">Phone Number:</span> {selectedPatient.phone}</p>
            <p className="text-base mb-2"><span className="font-semibold">Date of Birth:</span> {selectedPatient.birthdate}</p>
            <p className="text-base mb-2"><span className="font-semibold">Blood Group:</span> {selectedPatient.bloodGroup}</p>
            <p className="text-base mb-2"><span className="font-semibold">Country:</span> {selectedPatient.country}</p>
            <p className="text-base mb-2"><span className="font-semibold">Nationality:</span> {selectedPatient.nationality}</p>
            <p className="text-base mb-2"><span className="font-semibold">Address:</span> {selectedPatient.address}</p>
            <div className="flex space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gradient-to-r from-seagreen to-seagreen-200 text-white rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;
