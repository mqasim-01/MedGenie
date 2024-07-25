import React from "react";
import { createPopper } from "@popperjs/core";
import assets from "../../assets/images";

const DoctorDropdown = () => {
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
        className="text-blueGray-500 block"
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
        <button className="px-4">
          Logout
        </button>
      </div>
    </>
  );
};

export default DoctorDropdown;
