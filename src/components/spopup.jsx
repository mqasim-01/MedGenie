import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SPopup = () => {
  const [showPopup, setShowPopup] = useState(true); // Show popup initially

  const handlePatientClick = () => {
    alert('You clicked Patient');
    // Handle any other logic for Patient button click
  };

  const handleDoctorClick = () => {
    alert('You clicked Doctor');
    // Handle any other logic for Doctor button click
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Choose your role:</h2>
            <div className="flex justify-center gap-4">
              <Link to=""><button
                onClick={handlePatientClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Patient
              </button></Link>
              <Link to=""><button
                onClick={handleDoctorClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Doctor
              </button></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SPopup;
