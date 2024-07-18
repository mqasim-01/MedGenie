import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState(''); // New state to keep track of popup type

  const togglePopup = (type) => {
    setPopupType(type);
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-4 flex items-center justify-between py-4 md:py-8">
          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo"> MedGenie </a>

          {/* Navigation */}
          <nav className="hidden gap-12 lg:flex">
            <a href="#" className="text-lg font-semibold text-indigo-500">Home</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About Us</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Rating</a>
          </nav>

          {/* Buttons */}
          <div className="flex gap-4 lg:gap-8">
            <button className="rounded-lg bg-gray-200 px-6 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block" onClick={() => togglePopup('signin')}>Sign In</button>
            <button className="rounded-lg bg-gray-200 px-6 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block" onClick={() => togglePopup('getstarted')}>Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Menu
          </button>
        </header>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative bg-white rounded-lg p-8 shadow-md">
            {popupType === 'signin' && (
              <>
                <h2 className="text-lg font-semibold mb-4">Sign In As</h2>
                <div className="flex gap-4">
                  <Link to='/patient-signin'><button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg focus:outline-none">Patient</button></Link>
                  <Link to='/doctor-signin'><button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg focus:outline-none">Doctor</button></Link>
                </div>
              </>
            )}
            {popupType === 'getstarted' && (
              <>
                <h2 className="text-lg font-semibold mb-4">Sign Up As</h2>
                <div className="flex gap-4">
                  <Link to='patient-signup'><button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg focus:outline-none">Patient</button></Link>
                  <Link to='doctor-signup'><button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg focus:outline-none">Doctor</button></Link>
                </div>
              </>
            )}
            <button className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded-lg focus:outline-none" onClick={togglePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.293 5.293a1 1 0 00-1.414 0L10 8.586 6.707 5.293a1 1 0 10-1.414 1.414L8.586 10 5.293 13.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
