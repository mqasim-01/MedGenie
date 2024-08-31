import PatientDropdown from "./patientdropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { auth, db } from '../../firebase'; // Adjust the path to your firebase.js
import { getDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';


export default function PatientNavbar() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async (patients) => {
    const docRef = doc(db, 'Patients', patients.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserDetails(docSnap.data());
    } else {
      console.log('User document not found');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData(user);
      } else {
        setUserDetails(null);
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = '/';
      toast.success("LogOut Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  }

  return (
    <>
  {/* Navbar */}
  <nav className="absolute top-0 left-0 w-full z-10 bg-gradient-to-r from-seagreen-200 to-seagreen flex flex-col md:flex-row md:items-center md:justify-between p-4">
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Brand */}
      <a
        className="text-white text-lg shadow-sm lg:pl-6 uppercase font-semibold md:ml-0 mb-2 md:mb-0"
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        Dashboard
      </a>

      {/* Form */}
      <form className="flex flex-col md:flex-row items-center md:ml-auto mb-2 md:mb-0 w-full md:w-auto relative">
        <div className="relative flex w-full items-stretch">
          <input
            type="text"
            placeholder="Search here..."
            className="border-0 px-3 py-3 placeholder-darkgray bg-gray rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} className="text-blueGray-300" />
          </span>
        </div>
      </form>

      {/* User */}
      <ul className="flex flex-col md:flex-row list-none items-center w-full md:w-auto mt-2 md:mt-0 pr-4 pl-6">
        <PatientDropdown userDetails={userDetails} handleLogout={handleLogout} />
      </ul>
    </div>
  </nav>
  {/* End Navbar */}
  <ToastContainer />
</>

  );
}
