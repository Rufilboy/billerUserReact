import React, { useContext, useState } from "react";
import eye from "../icon/eye.svg";
import add from "../icon/add.svg";
import atm from "../icon/atm.svg";
import device from "../icon/device.svg";
import wifi from "../icon/wifi.svg";
import electricitylogo from "../icon/electricitylogo.svg";
import tvlogo from "../icon/tvlogo.svg";
import Context from "../store/context";
import { useHistory } from "react-router-dom";

function Main() {
  const [showComplete, setshowComplete] = useState(false);
  const [showAccBal, setshowAccBal] = useState(true);
  const { open, setOpen, user } = useContext(Context);
  const showBalance = () => {
    setshowAccBal(!showAccBal);
  };
  const history = useHistory();

  return (
    <div className="main h-full w-full bg-secondary-blue px-4 md:pl-10 md:pr-16 py-6">
      <div className=" rounded-lg ">
        <div className="border-b flex flex-col justify-start  border-gray-200  w-8-12  ">
          <div className="text-primary-blue font-medium text-lg md:text-2xl">
            Dashboard
          </div>
          <div className="font-medium text-sm md:text-xs text-primary-gray mt-0.5 mb-6">
            Welcome back, {user.firstName}
          </div>
        </div>

        <div
          className="w-8-12"
          onClick={() => {
            setshowComplete(!showComplete);
          }}
        >
          <div className="flex justify-between items-center bg-primary-blue md:p-7 p-2.5 md:divide-x divide-y md:divide-y-0 divide-primary-gray flex-col md:flex-row ">
            <div className="w-full md:w-auto px-2">
              <div className="flex justify-between items-center px-2 pb-4  w-80 ">
                <span className="text-xs font-medium text-white ">
                  Current Wallet balance
                </span>
                <img src={eye} alt="eye" onClick={() => showBalance()} />
              </div>
              <p className="text-2xl mb-3 md:mb-0 md:text-4xl text-white font-medium px-2">
                {showAccBal ? `₦ ${user.wallet_balance}` : "xx.xx.xx"}
              </p>
            </div>

            <div className="fund flex flex-col md:pl-8  ">
              <p className="font-medium text-white text-xs mb-3 pt-2 md:pt-0">
                Funding Options
              </p>
              <div className=" flex space-x-6">
                <button className="bg-white flex justify-center items-center rounded-lg py-3 px-5">
                  <img
                    src={add}
                    alt="add"
                    className="h-7 w-7  md:h-10 md:w-10"
                  />
                  <p className=" text-xx  md:text-sm font-medium text-primary-blue  ml-3 ">
                    Fund with Monnify
                  </p>
                </button>
                <button className="bg-white flex justify-center items-center rounded-lg  py-3 px-5">
                  <img
                    src={atm}
                    alt="atm"
                    className="h-7 w-7 md:h-10 md:w-10"
                  />
                  <p className="text-xx  md:text-sm font-medium text-primary-blue ml-3 ">
                    Fund with ATM
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {showComplete ? (
          <div className="bg-white px-2   md:px-8 py-3.5">
            <div className=" text-xx md:text-sm text-primary-blue flex items-center justify-between font-medium">
              <p className="">
                Setup your account by completeing your KYC details
              </p>
              <p className="">Complete Later</p>
            </div>
            <p className="text-xx md:text-xs font-normal text-primary-gray py-2.5">
              To access more beneficial features complete your kyc details by
              filling in the form
            </p>
            <div className="grid w-full h-1 grid-cols-6 gap-2  self-center mt-2">
              <div className="h-full col-span-1 bg-primary-blue rounded"></div>
              <div className="h-full col-span-1 bg-primary-blue  rounded"></div>
              <div className="h-full col-span-1 bg-primary-gray  rounded"></div>
              <div className="h-full col-span-1 bg-primary-gray  rounded"></div>
              <div className="h-full col-span-1 bg-primary-gray  rounded"></div>
              <div className="h-full col-span-1 bg-primary-gray  rounded"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="services pt-5   rounded-lg divide-y divide-primary-gray">
        <h2 className="font-medium text-sm text-primary-gray mb-3.5">
          Available Services
        </h2>

        <div
          className=" md:flex grid grid-cols-2 gap-3 md:justify-between md:flex-wraps    items-centers  w-full pt-8 "
          onClick={() => history.push("/airtime")}
        >
          <div className=" shadow-lg rounded-lg bg-white pl-6  md:pr-24 md:py-5 pt-5 pb-3.5 pr-11">
            <img
              src={device}
              alt="device"
              className="md:h-16 md:w-16 h-11 w-11 "
            />
            <div className="flex flex-col   text-sm md:text-base font-medium text-primary-gray mt-5">
              <span className="block">Airtime</span>
              <span className="block ">Purchase</span>
            </div>
          </div>
          <div className=" shadow-lg rounded-lg bg-white pl-6  md:pr-24 md:py-5 pt-5 pb-3.5 pr-11">
            <img src={wifi} alt="wifi" className="md:h-16 md:w-16 h-11 w-11 " />
            <div className="flex flex-col   text-sm md:text-base font-medium text-primary-gray mt-5">
              <span className="block">Data</span>
              <span className="block ">Purchase</span>
            </div>
          </div>
          <div className=" shadow-lg rounded-lg bg-white pl-6  md:pr-24 md:py-5 pt-5 pb-3.5 pr-11">
            <img
              src={electricitylogo}
              alt="electricitylogo"
              className="md:h-16 md:w-16 h-11 w-11 "
            />
            <div className="flex flex-col  text-sm md:text-base font-medium text-primary-gray mt-5">
              <span className="block">Electricity</span>
              <span className="block ">Purchase</span>
            </div>
          </div>
          <div className=" shadow-lg rounded-lg bg-white pl-6  md:pr-24 md:py-5 pt-5 pb-3.5 pr-11">
            <img
              src={tvlogo}
              alt="tvlogo"
              className="md:h-16 md:w-16 h-11 w-11 "
            />
            <div className="flex flex-col   text-sm md:text-base font-medium text-primary-gray mt-5">
              <span className="block">Cable TV</span>
              <span className="block ">Purchase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
