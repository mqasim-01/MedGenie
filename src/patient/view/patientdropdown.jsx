import React from "react";
import { createPopper } from "@popperjs/core";
import assets from "../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const PatientDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block relative"
        href="#"
        ref={btnDropdownRef}
        onClick={e => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="user"
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={assets.Emily}
            />
          </span>
          <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full border-2 border-white">
            5
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-gray text-base z-50 float-left py-2 list-none text-left rounded border shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <div className="flex flex-col">
          
          <Link to='/patient-profile'><button className="flex items-center px-4 py-2 text-left hover:bg-gray-200">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            View Profile
          </button></Link>
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
          <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200 rounded-b">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientDropdown;
