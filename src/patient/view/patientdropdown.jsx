import React, { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";
import assets from "../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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

  return (
    <>
      <a
        className="text-blueGray-500 block relative"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-auto h-12 px-4 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-lg">
            {userDetails ? userDetails.name : "Loading..."}
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
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <button className="px-4">
          Logout
        </button>
      </div>
    </>
  );
};

export default PatientDropdown;
