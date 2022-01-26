import { useContext, useState } from "react";
import eye from "../icon/eye.svg";
import add from "../icon/add.svg";
import atm from "../icon/atm.svg";
import Context from "../store/context";

function BalanceDisplay() {
  const { open, setOpen, user, token, formData, formDispatch } =
    useContext(Context);
  const [showAccBal, setshowAccBal] = useState(true);
  const showBalance = () => {
    setshowAccBal(!showAccBal);
  };
  return (
    <div className=" rounded-lg flex justify-between items-center w-8-12 bg-primary-blue  md:px-8 py-1.5 md:divide-x divide-y md:divide-y-0 divide-primary-gray flex-col md:flex-row ">
      <div className="w-full md:w-auto px-2">
        <div className="flex justify-between items-center md:px-2 md:pb-4  ">
          <span className="text-xx md:text-xs font-medium text-white w-80">
            Current Wallet balance
          </span>
          <img src={eye} alt="eye" onClick={() => showBalance()} />
        </div>
        <p className=" text-lg md:text-4xl text-white font-medium ">
          {showAccBal ? `₦ ${user.wallet_balance}` : "xx.xx.xx"}
        </p>
      </div>

      <div className="fund flex flex-col md:pl-8 ">
        <p className="font-medium text-white text-xs mb-1 pt-1 md:pt-0">
          Funding Options
        </p>
        <div className=" flex space-x-6">
          <button className="bg-white flex justify-center items-center rounded-lg py-3 px-5">
            <img src={add} alt="add" className="h-7 w-7  md:h-10 md:w-10" />
            <p className=" text-xx  md:text-sm font-medium text-primary-blue  ml-3 ">
              Fund with Monnify
            </p>
          </button>
          <button className="bg-white flex justify-center items-center rounded-lg  py-3 px-5">
            <img src={atm} alt="atm" className="h-7 w-7 md:h-10 md:w-10" />
            <p className="text-xx  md:text-sm font-medium text-primary-blue ml-3 ">
              Fund with ATM
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BalanceDisplay;
