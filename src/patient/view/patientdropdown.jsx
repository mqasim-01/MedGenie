import React, { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faSignOutAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import assets from "../../assets/images";

const PatientDropdown = ({ userDetails, handleLogout }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const handleLogoutClick = () => {
    closeDropdownPopover(); // Close the dropdown menu
    handleLogout(); // Perform the logout action
  };

  return (
    <>
      <a
        className="text-blueGray-500 block relative"
        
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 inline-flex items-center justify-center rounded-full overflow-hidden bg-blueGray-200">
            <img
              alt="..."
              className="w-full h-full object-cover"
              src={userDetails?.photo || assets.Profile}
            />
          </span>

          <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-black bg-red-500 rounded-full border-2 bg-white">
            5
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <div className="flex flex-col">
          {userDetails && (
            <>
              <div className="px-4 py-2 text-sm text-gray-700">
                {userDetails.email}
              </div>
              <div className="border-t border-gray-300"></div>
            </>
          )}

          <Link to="/patient-profile">
            <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              View Profile
            </button>
          </Link>
          <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200 rounded-t">
            <FontAwesomeIcon icon={faBell} className="mr-2" />
            Notifications
            <span className="ml-auto flex items-center justify-center w-4 h-4 text-xs text-darkgray bg-red-500 rounded-full border-2 border-darkgray">
              5
            </span>
          </button>
          <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </button>
          <hr className="my-2 md:min-w-full" />
          <button
            className="flex items-center px-4 py-2 text-left hover:bg-gray-200 rounded-b"
            onClick={handleLogoutClick}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientDropdown;
