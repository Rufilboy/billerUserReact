import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import eye from "../icon/eye.svg";
import add from "../icon/add.svg";
import atm from "../icon/atm.svg";
import rightArrow from "../icon/rightArrow.svg";
import BalanceDisplay from "../components/BalanceDisplay";
import { useHistory } from "react-router-dom";

function DataPurchase() {
  const history = useHistory();
  return (
    <div>
      <div className="grid maincolumns  ">
        <div className="  col-span-12">
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
                    Data Purchase
                  </div>
                  <div className="font-medium text-xs text-primary-gray mt-2.5 mb-5">
                    Purchase your data
                  </div>
                </div>
                <BalanceDisplay />
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
                      <input
                        type="select"
                        id="search-form-price"
                        className=" mt-2.5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 md:py-3.5 md:px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Eg. MTN "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-base font-medium text-primary-gray mt-6"
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
                        className="block text-sm md:text-base font-medium text-primary-gray mt-6"
                      >
                        Select Data Plan
                      </label>
                      <input
                        type="select"
                        id="search-form-price"
                        className=" mt-2.5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 md:py-3.5 md:px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Eg. MTN "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-base font-medium text-primary-gray mt-6"
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
                    <span className="block w-full rounded-md shadow-sm mt-12">
                      <button
                        type="button"
                        className="py-2 px-2 md:py-3.5 md:px-4  bg-primary-blue hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm md:text-base font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Proceed to Pay
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataPurchase;
