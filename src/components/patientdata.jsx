import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Adjust the path if necessary
import { collection, getDocs } from "firebase/firestore";
import assets from "../assets/images";

const PatientList = () => {
  const [Patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
<div className="bg-gray min-h-screen p-6">
  <h1 className="text-3xl text-center font-bold mb-4">Patients List</h1>

  {Patients.length === 0 ? (
    <p className="text-center">No patients found.</p>
  ) : (
    <div className="flex flex-wrap gap-6">
  {Patients.map((patient) => (
    <div
      key={patient.id}
      className="w-[300px] h-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
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
</div>


  );
};

export default PatientList;
