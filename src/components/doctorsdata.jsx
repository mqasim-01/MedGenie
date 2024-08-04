import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Adjust the path if necessary
import { collection, getDocs } from "firebase/firestore";
import assets from "../assets/images";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        className="w-[300px] h-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
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
</div>

  );
};

export default DoctorList;
