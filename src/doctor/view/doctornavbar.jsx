import React, { useState, useEffect } from "react";
import { auth, db } from '../../firebase'; // Adjust the path to your firebase.js
import { getDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import PatientDropdown from "./doctordropdown";

export default function DoctorNavbar() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async (Doctors) => {
    const docRef = doc(db, 'Doctors', Doctors.uid);
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
      <nav className="absolute top-0 left-0 w-full z-10 bg-gradient-to-r from-seagreen-200 to-seagreen md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-lg shadow-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input type="text" placeholder="Search Doctors" className="border-0 px-3 py-3 placeholder-darkgray relative bg-gray rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <PatientDropdown userDetails={userDetails} handleLogout={handleLogout} />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
      <ToastContainer />
    </>
  );
}
