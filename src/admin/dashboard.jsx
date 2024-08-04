import React, { useState } from 'react';
import AdminDropdown from './dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DoctorList from '../components/doctorsdata';
import PatientList from '../components/patientdata';


function AdminDashboard() {
  const [activeSection, setActiveSection] = useState(null);

  const handleBackClick = () => {
    setActiveSection(null);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-darkgray md:flex-row md:flex-nowrap md:justify-start flex items-center shadow p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-lg shadow-sm uppercase hidden lg:inline-block font-semibold"
            href=""
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3 relative">
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-darkgray relative bg-gray rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-blueGray-300"
                />
              </span>
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <AdminDropdown />
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        {/* Conditional Rendering of Buttons */}
        {activeSection === null && (
          <div className="flex flex-col md:flex-row w-full max-w-5xl px-4">
            {/* Section 1 */}
            <button 
              className="bg-white text-center p-8 m-4 border-4 border-seablue shadow-lg rounded-lg flex-1 transition-transform duration-300 ease-out transform hover:scale-105"
              onClick={() => setActiveSection('doctors')}
            >
              <h2 className="text-xl font-semibold mb-4">Registered Doctors</h2>
            </button>

            {/* Section 2 */}
            <button 
              className="bg-white text-center p-8 m-4 border-4 border-seagreen shadow-lg rounded-lg flex-1 transition-transform duration-300 ease-out transform hover:scale-105"
              onClick={() => setActiveSection('patients')}
            >
              <h2 className="text-xl font-semibold mb-4">Registered Patients</h2>
            </button>
          </div>
        )}

        {/* Section 3 */}
        {activeSection === null && (
          <button 
            className="bg-white p-8 m-4 text-center border-4 border-r-seablue border-l-seagreen border-t-seablue-200 border-b-seagreen-200 shadow-lg rounded-lg w-full max-w-5xl transition-transform duration-300 ease-out transform hover:scale-105"
            onClick={() => setActiveSection('appointments')}
          >
            <h2 className="text-xl font-semibold mb-4">Appointment Applications</h2>
          </button>
        )}

        {/* Conditional Rendering of Components */}
        {activeSection && (
          <div className="flex flex-col md:flex-row items-center w-full px-4">
            <button
              className="bg-blue-500 text-black p-4 mb-6 border rounded-lg shadow-lg transition-transform duration-300 ease-out transform hover:scale-105 md:mr-4"
              onClick={handleBackClick}
            >
              Back
            </button>

            <div className="flex-1 py-10">
              {activeSection === 'doctors' && <DoctorList key="doctors" />}
              {activeSection === 'patients' && <PatientList key="patients" />}
              {/* {activeSection === 'appointments' && < key="appointments" />} */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
