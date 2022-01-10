import React, { useContext } from "react";
import category from "../icon/category-2.svg";
import document from "../icon/document-text.svg";
import settings from "../icon/setting-2.svg";
import calling from "../icon/call-calling.svg";
import profile from "../icon/profile-2user.svg";
import Context from "../store/context";
import avater from "../icon/avater.svg";
import iconwhite from "../icon/iconWhite.svg";
import cancel from "../icon/cancel.svg";

import lock from "../icon/lock.svg";

function Sidebar() {
  const { open, setOpen, user } = useContext(Context);
  return (
    <div
      className={
        "flex flex-col full md:w-full w-72 absolute z-50 inset-y-0 left-0 transform  transition duration-200 ease-in-out bg-primary-blue md:bg-white md:relative md:translate-x-0 " +
        (open ? "-translate-x-full " : "")
      }
    >
      <div className="md:pt-8 mb-16 md:px-7">
        <div className="flex justify-between items-center md:hidden p-4">
          <img src={iconwhite} alt="logo" className="h-9 w-28" />
          <img
            src={cancel}
            alt="cancel"
            className="h-4 w-4"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div className="avatar py-2.5  rounded-lg  flex space-x-2   justify-start items-center md:hidden px-4 mt-4">
          <div className="">
            <img src={avater} alt="avater" />
          </div>
          <div className="profile text-white  ">
            <span className="block text-sm md:text-base font-medium text-white">
              {user.firstName}
            </span>

            <span className="block text-xx text-tetiary-brown md:text-primary-gray ">
              {user.userType}
            </span>
          </div>
        </div>
        <h3 className="text-primary-gray text-xx font-medium ml-6 ">General</h3>
        <div className="md:p-2.5 ">
          <div className="">
            <div className=" flex justify-right items-center  space-x-3 text-white md:text-primary-gray   w-full hover:bg-tetiary-yellow md:hover:bg-secondary-yellow md:hover:text-primary-blue  p-2.5">
              <svg
                width="28"
                height="28"
                className="currentColor"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8334 11.6666H22.1667C24.5 11.6666 25.6667 10.4999 25.6667 8.16659V5.83325C25.6667 3.49992 24.5 2.33325 22.1667 2.33325H19.8334C17.5 2.33325 16.3334 3.49992 16.3334 5.83325V8.16659C16.3334 10.4999 17.5 11.6666 19.8334 11.6666Z"
                  stroke="currentColor"
                  stroke-width="2.6"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83337 25.6666H8.16671C10.5 25.6666 11.6667 24.4999 11.6667 22.1666V19.8333C11.6667 17.4999 10.5 16.3333 8.16671 16.3333H5.83337C3.50004 16.3333 2.33337 17.4999 2.33337 19.8333V22.1666C2.33337 24.4999 3.50004 25.6666 5.83337 25.6666Z"
                  stroke="currentColor"
                  stroke-width="2.6"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.00004 11.6666C9.57737 11.6666 11.6667 9.57725 11.6667 6.99992C11.6667 4.42259 9.57737 2.33325 7.00004 2.33325C4.42271 2.33325 2.33337 4.42259 2.33337 6.99992C2.33337 9.57725 4.42271 11.6666 7.00004 11.6666Z"
                  stroke="currentColor"
                  stroke-width="2.6"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 25.6666C23.5774 25.6666 25.6667 23.5772 25.6667 20.9999C25.6667 18.4226 23.5774 16.3333 21 16.3333C18.4227 16.3333 16.3334 18.4226 16.3334 20.9999C16.3334 23.5772 18.4227 25.6666 21 25.6666Z"
                  stroke="currentColor"
                  stroke-width="2.6"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-xs font-medium ">Dashboard</p>
            </div>

            <div className=" flex justify-right items-center  space-x-3 text-white md:text-primary-gray  w-full hover:bg-secondary-yellow hover:text-primary-blue p-2.5">
              <img src={document} alt="categoryicon" className="w-7 h-7" />
              <p className="text-xs font-medium  ">Transactions</p>
            </div>
            <hr className="bg-gray-300 my-6" />
            <h3 className="text-primary-gray text-xxs font-medium ml-5 mb-4">
              ACCOUNT
            </h3>
            <div className=" flex justify-right items-center  space-x-3 text-white md:text-primary-gray   w-full hover:bg-secondary-yellow hover:text-primary-blue p-2.5">
              <img src={settings} alt="settingsicon" className="w-7 h-7" />
              <p className="text-xs font-medium ">Settings</p>
            </div>
            <div className=" flex justify-right items-center  space-x-3 text-white md:text-primary-gray   w-full hover:bg-secondary-yellow hover:text-primary-blue  p-2.5">
              <img src={calling} alt="Calling icon" className="w-7 h-7" />
              <p className="text-xs font-medium ">Contact</p>
            </div>
            <div className=" flex justify-right items-center  space-x-3 text-white md:text-primary-gray   w-full hover:bg-secondary-yellow hover:text-primary-blue  p-2.5">
              <img src={profile} alt="profile icon" className="w-7 h-7" />
              <p className="text-xs font-medium ">FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
