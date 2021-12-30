import React, { useContext } from "react";
import smallIcon from "../icon/smallIcon.svg";
import notification from "../icon/notification.svg";
import avater from "../icon/avater.svg";
import arrowDown from "../icon/arrow-down.svg";
import handbugger from "../icon/handbugger.svg";
import Sidebercontext from "../store/sidebercontext";

function Header() {
  const { open, setOpen } = useContext(Sidebercontext);

  return (
    <div className="bg-white flex items-center px-5 justify-between py-3.5 md:py-0">
      <div className=" md:hidden inline w-8">
        <img
          src={handbugger}
          alt="menu"
          className=" "
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <div className="  md:w-24 w-16 h-5">
        <img src={smallIcon} alt="Icon" className=" " />
      </div>
      <div className="flex items-center space-x-4">
        <div className="">
          <img src={notification} alt="notification" />
        </div>
        <div className="avatar py-2.5 px-5 rounded-lg  md:flex justify-between items-center ml-10 hidden ">
          <div className="">
            <img src={avater} alt="avater" />
          </div>
          <div className="profile text-white  ml-3.5">
            <span className="block text-base font-medium text-primary-blue">
              Mark Robinson
            </span>

            <span className="block text-xx text-primary-gray ">User Type</span>
          </div>

          <img src={arrowDown} alt="arrow" className="ml-7" />
        </div>
      </div>
    </div>
  );
}

export default Header;
