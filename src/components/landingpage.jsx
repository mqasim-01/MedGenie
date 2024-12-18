import React, { useState, useEffect, useRef } from "react";
import assets from "../assets/images";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Testimonials from "./testimonial/testimonials";
import Services from "./services";

const LandingPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="leading-normal tracking-normal">
      <div
        className={`gradient bg-gradient-to-r from-seablue to-seablue-200 ${
          scrollNav ? "bg-white" : ""
        }`}
      >
        <nav
          id="header"
          className={`fixed w-full z-30 top-0 ${
            scrollNav ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
            <RouterLink to="/">
              <div className="flex items-center">
                <img src={assets.Logo} alt="logo" className="h-8 mr-2" />
                <a
                  className={`text-${
                    scrollNav ? "black" : "white"
                  } no-underline hover:no-underline font-bold text-2xl lg:text-4xl`}
                >
                  MedGinie
                </a>
              </div>
            </RouterLink>
            <div className="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                onClick={toggleMenu}
                className={`mx-auto lg:mx-0 hover:underline ${
                  scrollNav
                    ? "bg-gradient-to-r from-seablue to-seablue-200"
                    : "bg-white"
                } text-${
                  scrollNav ? "white" : "black"
                } hover:font-bold rounded-full mt-0 lg:mt-0 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
              >
                Menu
              </button>
            </div>
            <div
              className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                isOpen ? "block" : "hidden"
              } lg:block mt-2 lg:mt-0 ${
                scrollNav ? "bg-white" : "bg-transparent"
              } text-${scrollNav ? "black" : "white"} p-4 lg:p-0 z-20`}
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-4">
                  <a
                    href="/"
                    className={`inline-block py-2 px-4 text-${
                      scrollNav ? "black" : "white"
                    } font-bold no-underline`}
                  >
                    Home
                  </a>
                </li>
                <li className="mr-4">
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    className={`inline-block text-${
                      scrollNav ? "black" : "white"
                    } no-underline hover:text-gray-800 hover:text-underline py-2 px-4`}
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="mr-4">
                  <RouterLink
                    to="/contactform"
                    className={`inline-block text-${
                      scrollNav ? "black" : "white"
                    } no-underline hover:text-gray-800 hover:text-underline py-2 px-4`}
                  
                  >Contact Us</RouterLink>
                </li>
              </ul>
              <button
                id="navAction"
                className={`mx-auto lg:mx-0 hover:underline ${
                  scrollNav
                    ? "bg-gradient-to-r from-seablue to-seablue-200"
                    : "bg-white"
                } text-${
                  scrollNav ? "white" : "black"
                } hover:font-bold rounded-full mt-4 lg:mt-0 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                onClick={() => togglePopup("signin")}
              >
                Sign In
              </button>
            </div>
          </div>
          <hr className="border-b border-gray opacity-25 my-0 py-0" />
        </nav>

        <div className="pt-20 pb-12">
          <div className="container px-6 mx-auto flex flex-wrap flex-col-reverse md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left">
              <p className="uppercase tracking-loose text-white mb-4">
                Connecting Patients and Doctors
              </p>
              <h1 className="my-4 text-3xl md:text-5xl font-bold leading-tight text-white">
                Revolutionize Your Healthcare Journey
              </h1>
              <p className="leading-normal text-lg md:text-2xl mb-8 text-white">
                Instant Appointments, AI-Powered Symptom Checking, and
                Personalized Care.
              </p>
              <button
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 hover:font-bold rounded-full my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={() => togglePopup("getstarted")}
              >
                Get Started
              </button>
            </div>
            <div className="w-full md:w-3/5 py-3 text-center">
              <img
                className="w-full md:w-2/3 mx-auto z-50"
                src={assets.Hero}
                alt="Hero"
              />
            </div>
          </div>
        </div>

        <div className="relative -mt-12 lg:-mt-24 ">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>

          <div id="services">
            <Services />
          </div>

          <svg
            className="wave-top"
            viewBox="0 0 1439 147"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-1.000000, -14.000000)"
                fillRule="nonzero"
              >
                <g className="wave" fill="#FFFFFF">
                  <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                </g>
                <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                  <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000)">
                    <path
                      d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                      opacity="0.100000001"
                    ></path>
                    <path
                      d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                      opacity="0.100000001"
                    ></path>
                    <path
                      d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                      opacity="0.200000003"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Testimonials
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <Testimonials />
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={popupRef}
            className="relative bg-white rounded-lg p-8 shadow-md"
          >
            {popupType === "signin" && (
              <>
                <h2 className="text-lg text-center font-bold mb-4">
                  Sign In As
                </h2>
                <div className="flex gap-4">
                  <RouterLink to="/patient-signin">
                    <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-seablue to-seablue-200 text-white hover:font-bold rounded-full my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-300 ease-in-out">
                      Patient
                    </button>
                  </RouterLink>
                  <RouterLink to="/doctor-signin">
                    <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-seablue-200 to-seablue text-white hover:font-bold rounded-full my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-300 ease-in-out">
                      Doctor
                    </button>
                  </RouterLink>
                </div>
              </>
            )}
            {popupType === "getstarted" && (
              <>
                <h2 className="text-lg text-center font-bold mb-4">
                  Sign Up As
                </h2>
                <div className="flex gap-4">
                  <RouterLink to="/patient-signup">
                    <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-seablue to-seablue-200 text-white hover:font-bold rounded-full my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-300 ease-in-out">
                      Patient
                    </button>
                  </RouterLink>
                  <RouterLink to="/doctor-signup">
                    <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-seablue-200 to-seablue text-white hover:font-bold rounded-full my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-300 ease-in-out">
                      Doctor
                    </button>
                  </RouterLink>
                </div>
              </>
            )}
            <button
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded-lg hover:shadow hover:shadow-black focus:outline-none"
              onClick={() => setPopupOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 00-1.414 0L10 8.586 6.707 5.293a1 1 0 10-1.414 1.414L8.586 10 5.293 13.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
