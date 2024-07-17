import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
            <Link to="/signin-popup"><button className="rounded-lg bg-gray-200 px-6 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Sign In</button></Link>
            <Link to="/signup-popup"><button className="rounded-lg bg-gray-200 px-6 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Get Started</button></Link>
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
    </div>
  );
};

export default Header;
