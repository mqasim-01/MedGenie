import React from "react";
import { createPopper } from "@popperjs/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import assets from "../assets/images";
import AddNewAdmin from "./addadmin"; // Import the new component

const AdminDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [showAddAdminPopup, setShowAddAdminPopup] = React.useState(false);
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

  const openAddAdminPopup = () => {
    setShowAddAdminPopup(true);
    closeDropdownPopover(); // Close dropdown when opening popup
  };

  const closeAddAdminPopup = () => {
    setShowAddAdminPopup(false);
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
              src={assets.Profile}
            />
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
          <button 
            onClick={openAddAdminPopup}
            className="flex items-center px-4 py-1 text-left hover:bg-gray-200 rounded-b"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Admin
          </button>

          <hr className="my-2 md:min-w-full" />
          <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200 rounded-b">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Conditionally render the AddNewAdmin component */}
      {showAddAdminPopup && <AddNewAdmin closePopup={closeAddAdminPopup} />}
    </>
  );
};

export default AdminDropdown;
