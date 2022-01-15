import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import eye from "../icon/eye.svg";
import add from "../icon/add.svg";
import atm from "../icon/atm.svg";
import rightArrow from "../icon/rightArrow.svg";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { validationAirtimePuchase } from "../components/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Context from "../store/context";
import PaymentModel from "../components/PaymentMethod";

type profile = {
  network: string;
  phoneNumber: number;
  amount: number;
};
const AirtimePurchase: React.FC = () => {
  const { open, setOpen, user, token, formData, formDispatch } =
    useContext(Context);
  const [showAccBal, setshowAccBal] = useState(true);

  console.log(user);
  console.log(token);
  const showBalance = () => {
    setshowAccBal(!showAccBal);
  };
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<profile>({
    resolver: yupResolver(validationAirtimePuchase),
  });

  return (
    <div>
      <div className="grid maincolumns ">
        <div className=" col-span-12">
          <Header />
        </div>

        <div className="mainGrid col-span-12 sidemaingrid">
          <div className="">
            <Sidebar />
          </div>
          <div className="">
            <div className="main h-full w-full bg-secondary-blue px-5  md:pl-10 md:pr-16 py-4">
              <div
                className="flex space-x-2 mb-7 md:hidden"
                onClick={() => {
                  history.push("/");
                }}
              >
                <img src={rightArrow} alt="back" />
                <p className="text-xs text-primary-blue">Back to Dashboard</p>
              </div>
              <div className=" rounded-lg ">
                <div className="border-b flex flex-col justify-start  border-gray-200  w-8-12  ">
                  <div className="text-primary-blue font-medium text-lg md:text-2xl">
                    Airtime Purchase
                  </div>
                  <div className="font-medium text-xs text-primary-gray mt-2.5 mb-5">
                    Purchase your airtime
                  </div>
                </div>

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

              <div className="services pt-5   rounded-lg ">
                <div className="w-full border-t border-primary-gray border-opacity-20"></div>

                <form className="bg-white p-5  md:p-10 mt-6">
                  <div className="w-full">
                    <div className=" relative ">
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-base font-medium text-primary-gray"
                      >
                        Select Network
                      </label>
                      <select
                        className=" mt-2.5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 md:py-3.5 md:px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Eg. MTN "
                        {...register("network")}
                      >
                        <option> </option>
                        <option value="MTN">MTN</option>
                        <option value="GLO">GLO</option>
                        <option value="AIRTELL">AIRTELL</option>
                        <option value="9MOBILE">9MOBILE</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-base font-medium text-primary-gray mt-5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="select"
                        id="search-form-price"
                        className=" mt-2.5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 md:py-3.5 md:px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Eg. 08146564876976"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-base font-medium text-primary-gray mt-5"
                      >
                        Amount
                      </label>
                      <input
                        type="select"
                        id="search-form-price"
                        className=" mt-2.5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 md:py-3.5 md:px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Eg. N2,000"
                      />
                    </div>
                  </div>
                  <div>
                    <PaymentModel />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirtimePurchase;
