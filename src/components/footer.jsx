import React from "react";
import assets from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-center md:text-left">
            <a
              href="#"
              className="flex items-center justify-center md:justify-start text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            >
              <img src={assets.Logo} alt="logo" className="h-8 mr-2" />
              MedGenie
            </a>
          </div>
          <div className="flex-1 mb-6 text-center">
            <p className="uppercase font-semibold text-black md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline pr-2"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline pr-2"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 mb-6 text-center">
            <p className="uppercase font-semibold text-black md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline pr-2"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 mb-6 text-center">
            <p className="uppercase font-semibold text-black md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline pr-2"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline pr-2"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 mb-6 text-center">
            <p className="uppercase font-semibold text-black md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline pr-2"
                >
                  Official Blog
                </a>
              </li>
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline pr-2"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2 inline-block md:block">
                <a
                  href="#"
                  className="no-underline hover:underline "
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
