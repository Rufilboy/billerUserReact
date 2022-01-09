import React from "react";
import smallIcon from "../icon/smallIcon.svg";
import { useHistory } from "react-router-dom";

function ResetAlert() {
  const history = useHistory();
  return (
    <div className="grid place-content-center h-screen  bg-secondary-blue">
      <div className="max-w-sm flex flex-col items-center justify-center px-4">
        <div className="smalliconside mb-8">
          <img src={smallIcon} alt="biller icon" />
        </div>
        <div className="flex formBg justify-center flex-col pb-7 pt-8 md:px-8 px-7">
          <h3 className="md:text-2xl text-lg font-medium text-left text-primary-blue mt-24">
            Verify your account
          </h3>
          <p className="text-sm font-medium text-secondary-black mt-10">
            We sent an email with instructions on how to set up your account.
            Check your inbox and get started transacting.
          </p>
          <form className="">
            <div className="relative w-full ">
              <div className="flex w-full mt-12">
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary-blue  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center text-base font-medium shadow-md rounded-lg "
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Got the email, Log me in
                </button>
              </div>
              <div className=" flex items-center justify-center flex-col divide-y divide-opacity-20 divide-secondary-gray w-full mt-6">
                <p className=" text-tetiary-gray text-sm font-medium  flex items-center justify-center  w-full pt-8 space-x-4">
                  Didn’t get an email?{" "}
                  <span className="text-primary-blue block">Resend email!</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetAlert;
