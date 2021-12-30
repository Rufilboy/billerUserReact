import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import rightAngle from "../icon/rightAngle.svg";

function settings() {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <div className=" col-span-12">
          <Header />
        </div>

        <div className="mainGrid col-span-12 sidemaingrid">
          <div className=" sidebar-wrapper ">
            <Sidebar />
          </div>
          <div className=" main-wrapper ">
            <div className="main h-full w-full bg-secondary-blue  pl-10 pr-16 py-4">
              <div className=" rounded-lg ">
                <div className="border-b flex flex-col justify-start  border-gray-200  w-8-12  ">
                  <div className="text-primary-blue font-medium text-2xl">
                    Settings
                  </div>
                  <div className="font-medium text-xs text-primary-gray mt-2.5 mb-5">
                    Fill in forms to complete profile and settings
                  </div>
                  <div className="subGrid ">
                    <div className="flex flex-col full w-full relative pr-4">
                      <div className="mb-16 ">
                        <div className=" flex justify-between items-center  space-x-3 text-primary-gray   w-full hover:bg-secondary-yellow hover:text-primary-blue  p-2.5 ">
                          <p className="text-xs font-medium ">Personal Info</p>
                          <img src={rightAngle} alt="categoryicon" />
                        </div>

                        <div className=" flex justify-between items-center  space-x-3 text-primary-gray   w-full hover:bg-secondary-yellow hover:text-primary-blue  p-2.5">
                          <p className="text-xs font-medium ">
                            Account Details
                          </p>
                          <img src={rightAngle} alt="categoryicon" />
                        </div>
                        <div className=" flex justify-between items-center  space-x-3 text-primary-gray   w-full hover:bg-secondary-yellow hover:text-primary-blue  p-2.5">
                          <p className="text-xs font-medium ">
                            Business Details
                          </p>
                          <img src={rightAngle} alt="categoryicon" />
                        </div>
                        <div className=" flex justify-between items-center  space-x-3 text-primary-gray   w-full hover:bg-secondary-yellow hover:text-primary-blue  p-2.5">
                          <p className="text-xs font-medium ">Documents</p>
                          <img src={rightAngle} alt="categoryicon" />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="bg-white  divide-y p-6 ">
                        <div className="flex justify-between items-center pb-4 ">
                          <p className="text-primary-blue text-lg font-medium ">
                            Personal Info
                          </p>
                          <p className="">Edit</p>
                        </div>
                        <div className="">
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              First name
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              Amina
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Last name
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              Amina
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              First name
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              Sobuur
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Other name
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              Agbeke
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Date of Birth
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              22-09-1995
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Residential Address
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              23 road Kano state Nigeria
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  divide-y p-6 mt-7 ">
                        <div className="flex justify-between items-center pb-4 ">
                          <p className="text-primary-blue text-lg font-medium ">
                            Account Details
                          </p>
                          <p className="">Edit</p>
                        </div>
                        <div className="">
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Email Addresss
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              ameenasobuur02@gmail.com
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Phone Number
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              +234 4674 2576 35
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Identity Type
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              National ID
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              ID Number
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              2434547568
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              BVN Number
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              4656876790
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Password
                            </p>
                            <p className="text-primary-blue text-2xl font-medium ">
                              &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  divide-y p-6 mt-7 ">
                        <div className="flex justify-between items-center pb-4 ">
                          <p className="text-primary-blue text-lg font-medium ">
                            Business Details
                          </p>
                          <p className="">Edit</p>
                        </div>
                        <div className="">
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Business Name
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              Biller Financials
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Business Website
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              BillerFInancials.com
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Business General Email
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              Billerfinancials@gmail.com
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Business Phone Number
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              +234 4665 346457
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Business State
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              F.C.T, Abuja Nigeria
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Business LGA
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              Bwari LGA
                            </p>
                          </div>
                          <div className="flex flex-col space-y mt-7">
                            <p className=" text-base font-medium text-secondary-black">
                              Business Address
                            </p>
                            <p className="text-primary-blue text-lg font-medium ">
                              23 road Kano state Nigeria
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  divide-y p-6 mt-7 ">
                        <div className="flex justify-between items-center pb-4 ">
                          <p className="text-primary-blue text-lg font-medium ">
                            Compliance Documents
                          </p>
                          <p className="">Edit</p>
                        </div>
                        <div className="">
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default settings;
