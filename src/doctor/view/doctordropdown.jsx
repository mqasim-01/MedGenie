import React, { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";
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

  return (
    <>
      <a
        className="text-blueGray-500 block"
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
        {userDetails && (
          <>
            <div className="px-4 py-2 text-sm text-gray-700">{userDetails.email}</div>
            <div className="border-t border-gray-300"></div>
          </>
        )}
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default PatientDropdown;
