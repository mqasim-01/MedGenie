import DoctorDropdown from "./doctordropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";
import { auth, db } from '../../firebase'; // Adjust the path to your firebase.js
import { getDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';


export default function DoctorNavbar() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async (doctors) => {
    const docRef = doc(db, 'Doctors', doctors.uid);
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
      
      <nav className="absolute top-0 left-0 w-full z-10 bg-gradient-to-r from-seablue-200 to-seablue md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">

        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          
          <a
            className="text-white text-lg shadow-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Dashboard
          </a>
          
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3 relative">
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-darkgray relative bg-gray rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faSearch} className="text-blueGray-300" />
              </span>
              
            </div>
          </form>
          
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <DoctorDropdown userDetails={userDetails} handleLogout={handleLogout} />
          </ul>
        </div>
      </nav>
      
      <ToastContainer />
    </>
  );
}
