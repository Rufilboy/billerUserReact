import React, { useContext, useState } from "react";
import add from "../icon/add.svg";
import atm from "../icon/atm.svg";
import Context from "../store/context";
import rightArrow from "../icon/rightArrow.svg";
import cancel from "../icon/cancel.svg";
import eye2 from "../icon/eye2.svg";

export default function PaymentMethodModal(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [pwdType, setPwdType] = useState("password");
  const { open, setOpen, user, token, formData, formDispatch } =
    useContext(Context);
  console.log(user);
  const changetype = () => {
    pwdType === "password" ? setPwdType("text") : setPwdType("password");
  };
  const formOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: "SET_FORM_DATA",
      data: { name: event.target.name, value: event.target.value },
    });
  };

  const modeOfPayment = (paymentMethod: string) => {
    formDispatch({
      type: "SET_FORM_DATA",
      data: { name: "paymentMethod", value: paymentMethod },
    });
  };

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
                <div
                  className={
                    " p-3 flex  justify-start items-center space-x-5 hover:bg-tetiary-yellow focus:bg-tetiary-yellow focus:ring focus:ring-violet-300 " +
                    (formData.paymentMethod === "ATM"
                      ? "bg-tetiary-yellow"
                      : "")
                  }
                  onClick={() => modeOfPayment("ATM")}
                >
                  <img
                    src={add}
                    alt="add"
                    className="h-7 w-7  md:h-10 md:w-10"
                  />
                  <p className="text-primary-blue font-medium  text-base ">
                    Pay with ATM
                  </p>
                </div>
                <div
                  className={
                    " p-3 flex  justify-start items-center space-x-5 hover:bg-tetiary-yellow focus:bg-tetiary-yellow focus:ring focus:ring-violet-300 " +
                    (formData.paymentMethod === "Wallet"
                      ? "bg-tetiary-yellow"
                      : "")
                  }
                  onClick={() => modeOfPayment("Wallet")}
                >
                  <img
                    src={atm}
                    alt="add"
                    className="h-7 w-7  md:h-10 md:w-10"
                  />
                  <p className="text-primary-blue font-medium  text-base">
                    Pay with Wallet
                  </p>
                </div>
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
      ) : (
        //password modal
        formData.paymentMethod && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm p-4">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-3">
                    <img src={rightArrow} alt="" />
                    <button onClick={() => setShowPasswordModal(false)}>
                      <img src={cancel} alt="" />
                    </button>
                  </div>
                  {/*body*/}
                  <form>
                    <label className="block  text-secondary-black text-base font-medium mt-4 p-3">
                      Password
                      <div className=" relative  w-full">
                        <input
                          type={pwdType}
                          className="create-input"
                          name="password"
                          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                          style={{ transition: "all .15s ease" }}
                          value={formData.password}
                          onChange={formOnChange}
                          // {...register("password")}
                        />
                        <div className="abso">
                          <img
                            src={eye2}
                            alt="eye"
                            className="text-secondary-gray "
                            onClick={() => {
                              changetype();
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-red-500 mt-2 text-sm">
                        {/* {errors.password?.message} */}
                      </div>
                    </label>
                    {/*footer*/}
                    <div className="flex w-full mt-6 mb-6 p-3">
                      <button
                        type="submit"
                        className="py-2 px-4 bg-primary-blue  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                        onClick={props.onSubmit}
                      >
                        Submit
                      </button>
                    </div>{" "}
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )
      )}
    </>
  );
}
