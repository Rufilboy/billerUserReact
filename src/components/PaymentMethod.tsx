import React, { useState } from "react";
import add from "../icon/add.svg";
import atm from "../icon/atm.svg";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <span className="block w-full rounded-md shadow-sm mt-12">
        <button
          type="button"
          className="py-2 px-2 md:py-3.5 md:px-4  bg-primary-blue hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm md:text-base font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={() => setShowModal(true)}
        >
          Proceed to Pay
        </button>
      </span>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm p-4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3">
                  <h3 className="text-lg font-semibold text-primary-blue">
                    Select Pay Method
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="font-semibold"
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <p className="font-medium  text-base leading-relaxed">
                    Select a payment method to proceed with the transaction.
                  </p>
                </div>
                <button className=" p-3 flex  justify-start items-center space-x-5 hover:bg-tetiary-yellow">
                  <img
                    src={add}
                    alt="add"
                    className="h-7 w-7  md:h-10 md:w-10"
                  />
                  <p className="text-primary-blue font-medium  text-base ">
                    Pay with Wallet
                  </p>
                </button>
                <button className=" p-3 flex  justify-start items-center space-x-5 hover:bg-tetiary-yellow">
                  <img
                    src={atm}
                    alt="add"
                    className="h-7 w-7  md:h-10 md:w-10"
                  />
                  <p className="text-primary-blue font-medium  text-base ">
                    Pay with Wallet
                  </p>
                </button>
                {/*footer*/}
                <div className="flex items-center justify-center p-3 space-x-4 mt-6">
                  <button
                    className=" bg-white border border-primary-blue font-medium text-primary-blue hover:bg-primary-blue hover:text-white px-7 py-2  rounded-lg text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className=" bg-white border border-primary-blue font-medium text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-2  rounded-lg text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
