import React from "react";
import assets from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-center md:text-left">
            <a
              
              className="flex items-center justify-center md:justify-start text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            >
              <img src={assets.Logo} alt="logo" className="h-8 mr-2" />
              MedGenie
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase font-semibold text-black md:mb-6 text-center md:text-left">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-semibold text-black md:mb-6 text-center md:text-left">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-semibold text-black md:mb-6 text-center md:text-left">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-semibold text-black md:mb-6 text-center md:text-left">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Official Blog
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-b border-darkgray opacity-25 my-0 py-0" />

      <div className="container my-6 mx-auto px-8 text-center text-darkgray">
        <p>&copy; 2024 MedGenie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
