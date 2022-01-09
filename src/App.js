import React from "react";

import "./App.css";
import AirtimePurchase from "./pages/airtimePurchase";
import CablePurchase from "./pages/cablePurchase";
import DataPurchase from "./pages/dataPurchase";
import ElectricityPurchase from "./pages/electricityPurchase";
import ForgetPass from "./pages/forgetPass";
import Home from "./pages/home";

import Login from "./pages/login";
import OtpInput from "./pages/otpInput";
import ResetAlert from "./pages/resetAlert";
import SignUpAlert from "./pages/signUpAlert";
import SetPass from "./pages/setPass";
import Settings from "./pages/settings";
import SignUp from "./pages/signUp";
import Splash from "./pages/splash";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="font-Montserrat md:max-w-full max-w-sm">
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/airtime">
        <AirtimePurchase />
      </Route>
      <Route path="/data">
        <DataPurchase />
      </Route>
      <Route path="/cable">
        <CablePurchase />
      </Route>
      <Route path="/electricity">
        <ElectricityPurchase />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/forget">
        <ForgetPass />
      </Route>
      <Route path="/dashbourd">
        <Home />
      </Route>
      <Route path="/Settings">
        <Settings />
      </Route>
      <Route path="/signUpAlert">
        <SignUpAlert />
      </Route>
    </div>
  );
}

export default App;
