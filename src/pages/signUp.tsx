import React, { useState } from "react";
import smallIcon from "../icon/smallIcon.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../components/validation";
import axios from "axios";
import { useHistory } from "react-router-dom";

import eye2 from "../icon/eye2.svg";
import { setTimeout } from "timers";

type profile = {
  firstName: string;
  lastName: string;
  email: string | number;
  phoneNumber: number;
  password: string;
  confirmPassword: any;
  emaqil: string;
};

const SignUp: React.FC = () => {
  const [pwdType, setPwdType] = useState("password");
  let history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<profile>({
    resolver: yupResolver(validationSchema),
  });

  const changetype = () => {
    pwdType === "password" ? setPwdType("text") : setPwdType("password");
  };
  const onSubmit = (data: profile) => {
    console.log(data);
    const {
      confirmPassword,
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
    } = data;
    const newUser = {
      email,
      password,
      userType: "individual",
      avatar: "https://images.app.goo.gl/3WoJUVenwTPhCGEGA",
      firstName,
      lastName,
    };

    axios({
      method: "post",
      url: "http://api.billerdev.ng/api/user/uniqueId/register",
      data: newUser,
    }).then((response) => {
      console.log(response.data);
      if (response.status === 201) {
        setTimeout(() => {
          history.push("/signUpAlert");
        }, 3000);
      }
    });
  };

  // const onSubmit = data => console.log(data);

  return (
    <div className="grid place-content-center  bg-secondary-blue">
      <div className="max-w-sm flex flex-col items-center justify-center my-8 p-5 md:p-0">
        <div className="smalliconside mb-8">
          <img src={smallIcon} alt="biller icon" />
        </div>
        <div className="flex  formBg   justify-center flex-col pb-7 pt-8 md:px-14 px-8">
          <h3 className="md:text-2xl text-lg font-medium text-left text-primary-blue">
            Sign up
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative w-full ">
              {/* <label className="block  text-black text-base font-medium mb-3.5 mt-9">
                User Type
                <select
                  className=" create-input"
                  style={{ transition: "all .15s ease" }}
                />
              </label> */}
              <label className="block  text-secondary-black md:text-base text-sm font-medium mt-4">
                First-Name
                <input
                  type="text"
                  className="create-input"
                  style={{ transition: "all .15s ease" }}
                  placeholder="John"
                  {...register("firstName")}
                />
                <div className="text-red-500 mt-5">
                  {errors.firstName?.message}
                </div>
              </label>
              <label className="block  text-secondary-black md:text-base text-sm font-medium mt-4">
                Last-Name
                <input
                  type="text"
                  className="create-input"
                  style={{ transition: "all .15s ease" }}
                  placeholder="Doe"
                  {...register("lastName")}
                />
                <div className="text-red-500 mt-5">
                  {errors.lastName?.message}
                </div>
              </label>
              <label className="block  text-secondary-black md:text-base text-sm font-medium mt-4">
                Email Address
                <input
                  type="email"
                  className=" create-input"
                  placeholder="example@mail.com"
                  style={{ transition: "all .15s ease" }}
                  {...register("email")}
                />
                <div className="text-red-500 mt-5">{errors.email?.message}</div>
              </label>
              <label className="block  text-secondary-black md:text-base text-sm font-medium mt-4">
                Phone Number
                <input
                  type="tel"
                  className="create-input"
                  style={{ transition: "all .15s ease" }}
                  placeholder="Eg 08012345678"
                  {...register("phoneNumber")}
                />
                <div className="text-red-500">
                  {errors.phoneNumber?.message}
                </div>
              </label>
              <label className="block  text-secondary-black md:text-base text-sm font-medium mt-4">
                Password
                <div className=" relative  w-full">
                  <input
                    type={pwdType}
                    className="create-input"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    style={{ transition: "all .15s ease" }}
                    {...register("password")}
                  />

                  <div className="abso">
                    <img
                      src={eye2}
                      alt="eye"
                      className="text-secondary-gray "
                      onClick={() => {
                        changetype();
                        console.log(pwdType);
                      }}
                    />
                  </div>
                </div>
                <div className="text-red-500">{errors.password?.message}</div>
              </label>

              <label className="block  text-secondary-black md:text-base text-sm font-medium mt-4">
                Confirm Password
                <div className=" relative  w-full">
                  <input
                    type={pwdType}
                    className="create-input"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    style={{ transition: "all .15s ease" }}
                    {...register("confirmPassword")}
                  />

                  <div className="abso">
                    <img
                      src={eye2}
                      alt="eye"
                      className="text-secondary-gray "
                      onClick={() => {
                        changetype();
                        console.log(pwdType);
                      }}
                    />
                  </div>
                </div>
                <div className="text-red-500">
                  {errors.confirmPassword?.message}
                </div>
              </label>

              <div className="flex w-full mt-12">
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary-blue  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center md:text-base text-sm font-semibold shadow-md rounded-lg "
                >
                  Submit
                </button>
              </div>
              <div className=" flex items-center justify-center flex-col divide-y divide-opacity-20 divide-secondary-gray w-full mt-10">
                <div></div>
                <p className=" text-tetiary-gray text-sm font-medium mt-4 flex items-center justify-center flex-col w-full pt-8">
                  Already have an account?
                  <span className="text-primary-blue block ">Log in</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
