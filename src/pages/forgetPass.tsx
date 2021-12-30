import React from "react";
import smallIcon from "../icon/smallIcon.svg";

function ForgetPass() {
  return (
    <div className="grid place-content-center h-screen  bg-secondary-blue">
      <div className="max-w-sm flex flex-col items-center justify-center">
        <div className="smalliconside mb-8">
          <img src={smallIcon} alt="biller icon" />
        </div>
        <div className="flex formBg justify-center flex-col pb-7 pt-8 px-14">
          <h3 className="text-2xl  font-medium text-left text-primary-blue">
            Reset Password
          </h3>
          <form className="">
            <div className="relative w-full ">
              <label className="block  text-secondary-black text-base font-medium mb-3.5 mt-9">
                Email address/Phone number
                <input
                  type="text"
                  className=" create-input"
                  style={{ transition: "all .15s ease" }}
                  placeholder="example@mail.com"
                />
              </label>
              <div className="flex w-full mt-12">
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary-blue  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                >
                  Reset Password
                </button>
              </div>
              <div className=" flex items-center justify-center flex-col divide-y divide-opacity-20 divide-secondary-gray w-full mt-10">
                <div></div>
                <p className=" text-tetiary-gray text-sm font-medium mt-4 flex items-center justify-center flex-col w-full pt-8">
                  Rememeber account details?
                  <span className="text-primary-blue block ">Log in</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
