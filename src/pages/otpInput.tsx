import React from "react";
import smallIcon from "../icon/smallIcon.svg";
import eye2 from "../icon/eye2.svg";

function OtpInput() {
  return (
    <div className="grid place-content-center h-screen py-8 bg-secondary-blue px-5">
      <div className="max-w-sm flex flex-col items-center justify-center">
        <div className="smalliconside mb-8">
          <img src={smallIcon} alt="biller icon" />
        </div>
        <div className="flex  formBg justify-center flex-col pb-7 pt-8 px-5">
          <h3 className="md:text-2xl text-lg font-medium text-left text-primary-blue">
            OTP Input
          </h3>
          <form className="">
            <div className="relative w-full ">
              <label className="block  text-secondary-black md:text-base text-sm font-medium mt-4">
                OTP
                <div className=" relative  w-full">
                  <input
                    type="password"
                    className="create-input"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    style={{ transition: "all .15s ease" }}
                  />
                  <div className="abso">
                    <img
                      src={eye2}
                      alt="eye"
                      className="text-secondary-gray "
                    />
                  </div>
                </div>
              </label>

              <div className="flex w-full mt-12">
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary-blue  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center md:text-base text-sm font-semibold shadow-md rounded-lg "
                >
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpInput;
