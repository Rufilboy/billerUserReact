import eye2 from "../icon/eye2.svg";
import smallIcon from "../icon/smallIcon.svg";

function login() {
  return (
    <div className="grid place-content-center  bg-secondary-blue">
      <div className="max-w-sm flex flex-col items-center justify-center my-8 p-5 md:p-0">
        <div className="smalliconside mb-8">
          <img src={smallIcon} alt="biller icon" />
        </div>
        <div className="flex  formBg   justify-center flex-col pb-7 pt-8 md:px-14 px-8">
          <h3 className="md:text-2xl text-lg font-medium text-left text-primary-blue">
            Log in
          </h3>
          <form className="">
            <div className="relative w-full ">
              <label className="block  text-secondary-black text-base  font-medium mb-3.5 mt-9">
                Email address/Phone number
                <input
                  type="text"
                  className=" create-input"
                  style={{ transition: "all .15s ease" }}
                  placeholder="example@mail.com"
                />
              </label>
              <label className="block  text-secondary-black text-base font-medium mt-4">
                Password
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
                  className="py-2 px-4 bg-primary-blue  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                >
                  Submit
                </button>
              </div>
              <div className=" flex items-center justify-center flex-col divide-y divide-opacity-20 divide-secondary-gray w-full mt-10">
                <p className="block  text-primary-blue text-base font-medium pb-2">
                  Forgot Password?
                </p>
                <p className=" text-tetiary-gray text-sm font-medium mt-4 flex items-center justify-center flex-col w-full pt-8">
                  Don’t have an account?
                  <span className="text-primary-blue block ">Sign up</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
