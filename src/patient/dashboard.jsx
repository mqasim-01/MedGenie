import React, {useState} from 'react'
import PatientNavbar from './view/patientnavbar'
import DoctorList from '../components/doctorsdata';

function PatientDashboard() {
  const [activeSection, setActiveSection] = useState(null);

  const handleBackClick = () => {
    setActiveSection(null);
  };
  return (
    <>
    
        <PatientNavbar/>
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        {/* Conditional Rendering of Buttons */}
        {activeSection === null && (
          <div className="flex flex-col md:flex-row w-full max-w-5xl px-4">
            {/* Section 1 */}
            <button 
              className="bg-white text-center p-8 m-4 border-4 border-seablue shadow-lg rounded-lg flex-1 transition-transform duration-300 ease-out transform hover:scale-105"
              onClick={() => setActiveSection('doctors')}
            >
              <h2 className="text-xl font-semibold mb-4">Find Doctors</h2>
            </button>

            
          </div>
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
              
              {/* {activeSection === 'appointments' && < key="appointments" />} */}
            </div>
          </div>
        )}
      </main>
    
    </>
  )
}

export default PatientDashboard