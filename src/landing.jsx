import React, { useState, useEffect } from 'react';
import assets from './assets/images';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState(''); // New state to keep track of popup type

  const togglePopup = (type) => {
    setPopupType(type);
    setPopupOpen(!isPopupOpen);
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 10) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <div className="leading-normal tracking-normal">
      {/* Gradient background */}
      <div className={`gradient bg-gradient-to-r from-blue-900 to-blue-500 ${scrollNav ? 'bg-white' : ''}`}>
        {/* Nav */}
        <nav id="header" className={`fixed w-full z-30 top-0 ${scrollNav ? 'bg-white shadow-md' : ''}`}>
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
            <Link to='/'>
              <div className="flex items-center">
                <img src={assets.Logo} alt="logo" className="h-8 mr-2" /> {/* Adjust height as needed */}
                <a className={`text-${scrollNav ? 'black' : 'white'} no-underline hover:no-underline font-bold text-2xl lg:text-4xl`} href="#">
                  MedGinie
                </a>
              </div>
            </Link>
            <div className="block lg:hidden pr-4">
              <button id="nav-toggle" className={`flex items-center p-2 text-${scrollNav ? 'pink-800' : 'white'} hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}>
                Menu
              </button>
            </div>
            <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 ${scrollNav ? 'bg-white' : 'bg-transparent'} text-${scrollNav ? 'black' : 'white'} p-4 lg:p-0 z-20`} id="nav-content">
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-4">
                  <a className={`inline-block py-2 px-4 text-${scrollNav ? 'black' : 'white'} font-bold no-underline`} href="#">Home</a>
                </li>
                <li className="mr-4">
                  <a className={`inline-block text-${scrollNav ? 'black' : 'white'} no-underline hover:text-gray-800 hover:text-underline py-2 px-4`} href="#">Services</a>
                </li>
                <li className="mr-4">
                  <a className={`inline-block text-${scrollNav ? 'black' : 'white'} no-underline hover:text-gray-800 hover:text-underline py-2 px-4`} href="#">Contact Us</a>
                </li>
              </ul>
              <button
                id="navAction"
                className={`mx-auto lg:mx-0 hover:underline ${scrollNav ? 'bg-gradient-to-r from-blue-900 to-blue-500' : 'bg-white'} text-${scrollNav ? 'white' : 'gray-800'} font-bold rounded-full mt-4 lg:mt-0 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                onClick={() => togglePopup('signin')}
              >
                Sign In
              </button>
            </div>
          </div>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
        {/* Hero */}
        <div className="pt-20 pb-12">
          <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* Left Col */}
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="uppercase tracking-loose text-white">What business are you?</p>
              <h1 className="my-4 text-5xl font-bold leading-tight text-white">
                Main Hero Message to sell yourself!
              </h1>
              <p className="leading-normal text-2xl mb-8 text-white">
                Sub-hero message, not too long and not too short. Make it just right!
              </p>
              <button 
                className={`mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                onClick={() => togglePopup('getstarted')}
              >
                Get Started
              </button>
            </div>
            {/* Right Col */}
            <div className="w-full md:w-3/5 py-3 text-center">
              <img className="w-full ml-2 md:w-2/3 z-50" src={assets.Hero} alt="Hero" />
            </div>
          </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
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
};

export default LandingPage;
