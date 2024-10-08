import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AdminDropdown from './dropdown';

export default function Adminnavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-darkgray md:flex-row md:flex-nowrap md:justify-start flex items-center shadow p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-lg shadow-sm uppercase hidden lg:inline-block font-semibold"
            href=""
            onClick={e => e.preventDefault()}
          >
            Dashboardghfhgf
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
                <FontAwesomeIcon icon={faSearch} className="text-blueGray-300" />
              </span>
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <AdminDropdown/>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>  
  )
}
