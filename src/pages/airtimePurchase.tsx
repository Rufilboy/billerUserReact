import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import rightArrow from "../icon/rightArrow.svg";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { validationAirtimePuchase } from "../components/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Context from "../store/context";
import PaymentMethodModal from "../components/PaymentMethod";
import axios from "axios";
import { getOS } from "../helpers/getOS";
import BalanceDisplay from "../components/BalanceDisplay";

interface profile {
  network: string;
  phoneNumber: number;
  amount: number;
}

const AirtimePurchase: React.FC = () => {
  const { open, setOpen, user, token, formData, formDispatch } =
    useContext(Context);
  const [showAccBal, setshowAccBal] = useState(true);
  const formOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: "SET_FORM_DATA",
      data: { name: event.target.name, value: event.target.value },
    });

    console.log(formData.phone_number);
  };
  const formOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    formDispatch({
      type: "SET_FORM_DATA",
      data: { name: event.target.name, value: event.target.value },
    });

    console.log(formData.phone_number);
  };
  console.log(user);
  console.log(token);
  console.log(formData);
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
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const GetSubmited = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(`"formdata:" ${formData}`);
    const data = {
      email: user.email,
      network: formData.network,
      name: user.firstName,
      source: getOS(),
      password: formData.password,
      phoneNumber: formData.phone_number,
      amount: formData.amount,
    };
    console.log(data);
    axios({
      method: "post",
      url: "https://api.billerdev.ng/api/user/uniqueId/walletAirtimePurchase",
      data: data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(formData);

    console.log(errors);
  }, [errors]);
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
              </div>
              <BalanceDisplay />
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
                        name="network"
                        value={formData.network}
                        onChange={formOnSelect}
                      >
                        <option> </option>
                        <option value="MTN">MTN</option>
                        <option value="GLO">GLO</option>
                        <option value="AIRTELL">AIRTELL</option>
                        <option value="9MOBILE">9MOBILE</option>
                      </select>
                      {errors.network?.message}
                      {console.log(errors)}
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
                        type="tel"
                        className=" mt-2.5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 md:py-3.5 md:px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Eg. 08146564876976"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={formOnChange}
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
                        type="number"
                        id=""
                        className=" mt-2.5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 md:py-3.5 md:px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Eg. N2,000"
                        name="amount"
                        value={formData.amount}
                        onChange={formOnChange}
                      />
                    </div>
                  </div>
                  <div>
                    <PaymentMethodModal onSubmit={GetSubmited} />
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
