import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="grid maincolumns ">
      <div className="col-span-12">
        <Header />
      </div>

      <div className="mainGrid col-span-12 sidemaingrid">
        <div className="">
          <Sidebar />
        </div>
        <div className=" ">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Home;
