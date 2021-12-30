import React from "react";
import bigIcon from "../icon/bigIcon.svg";
import smallIcon from "../icon/smallIcon.svg";

function Splash() {
  return (
    <div className="grid place-content-center h-screen bg-secondary-blue">
      <img src={smallIcon} alt="icon" className=" md:h-14 md:w-52 h-10 w-32" />
    </div>
  );
}

export default Splash;
