import React, { useState } from 'react';
import DoctorNavbar from './view/doctornavbar';
import AppointmentsData from '../components/appointmentsdata';

function DoctorDashboard() {
  const [activeSection, setActiveSection] = useState(null);

  const handleBackClick = () => {
    setActiveSection(null);
  };

  return (
    <>
      <DoctorNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        {/* Conditional Rendering of Buttons */}
        {activeSection === null && (
          <div className="flex flex-col md:flex-row w-full max-w-5xl px-4">
            {/* View Appointments Section */}
            <button
              className="bg-white text-center p-8 m-4 border-4 border-seablue shadow-lg rounded-lg flex-1 transition-transform duration-300 ease-out transform hover:scale-105"
              onClick={() => setActiveSection('appointments')}
            >
              <h2 className="text-xl font-semibold mb-4">View Appointments</h2>
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
              {activeSection === 'appointments' && <AppointmentsData key="appointments" />}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default DoctorDashboard;
