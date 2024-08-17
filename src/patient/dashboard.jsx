import React, { useState } from "react";
import PatientNavbar from "./view/patientnavbar";
import DoctorList from "../components/doctorsdata";
import AppointmentsData from "../components/appointmentsdata";
import assets from "../assets/images";

function PatientDashboard() {
  const [activeSection, setActiveSection] = useState(null);

  const handleBackClick = () => {
    setActiveSection(null);
  };

  return (
    <>
      <PatientNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray py-10">
        {/* Conditional Rendering of Buttons */}
        {activeSection === null && (
          <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 h-96">
            {/* Find Doctors Section */}
            <button
              className="bg-white p-8 m-4 border-2 border-seagreen shadow-2xl hover:border-4 hover:shadow-2xl hover:shadow-darkgray rounded-lg flex-1 transition-transform duration-300 ease-out transform hover:scale-105 flex flex-col items-center justify-center"
              onClick={() => setActiveSection("doctors")}
            >
              <img
                src={assets.Doctor}
                alt="doctors"
                className="w-64 p-6 mt-6"
              />
              <h2 className="text-xl font-semibold mb-4 text-center">
                Find Doctors
              </h2>
            </button>

            {/* View Appointments Section */}
            <button
              className="bg-white p-8 m-4 border-2 border-seagreen shadow-2xl hover:border-4 hover:shadow-2xl hover:shadow-darkgray rounded-lg flex-1 transition-transform duration-300 ease-out transform hover:scale-105 flex flex-col items-center justify-center"
              onClick={() => setActiveSection("appointments")}
            >
              <img
                src={assets.Appointment}
                alt="doctors"
                className="w-80 p-6 mt-6"
              />
              <h2 className="text-xl font-semibold mb-4">View Appointments</h2>
            </button>

            {/* View Appointments Section */}
            <button
              className="bg-white p-8 m-4 border-2 border-seagreen shadow-2xl hover:border-4 hover:shadow-2xl hover:shadow-darkgray rounded-lg flex-1 transition-transform duration-300 ease-out transform hover:scale-105 flex flex-col items-center justify-center"
              onClick={() => setActiveSection("")}
            >
              <img
                src={assets.ChatBot}
                alt="doctors"
                className="w-80 p-6 mt-6"
              />
              <h2 className="text-xl font-semibold mb-4">ChatBot</h2>
            </button>
          </div>
        )}

        {/* Conditional Rendering of Components */}
        {activeSection && (
          <div className="flex flex-col md:flex-row items-center w-full px-4">
            <button
              className="text-black p-4 mb-6 border rounded-lg shadow-sm hover:shadow-darkgray transition-transform duration-300 ease-out transform hover:scale-105 md:mr-4"
              onClick={handleBackClick}
            >
              Back
            </button>

            <div className="flex-1 py-10">
              {activeSection === "doctors" && <DoctorList key="doctors" />}
              {activeSection === "appointments" && (
                <AppointmentsData key="appointments" />
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default PatientDashboard;
