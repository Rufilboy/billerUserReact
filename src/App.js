import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Loading } from "./components/Loading";
const Home = React.lazy(() => import("./pages/home"));
const AirtimePurchase = React.lazy(() => import("./pages/airtimePurchase"));
const CablePurchase = React.lazy(() => import("./pages/cablePurchase"));
const DataPurchase = React.lazy(() => import("./pages/dataPurchase"));
const ElectricityPurchase = React.lazy(() =>
  import("./pages/electricityPurchase"),
);
const ForgetPass = React.lazy(() => import("./pages/forgetPass"));
const Login = React.lazy(() => import("./pages/login"));
const OtpInput = React.lazy(() => import("./pages/otpInput"));
const ResetAlert = React.lazy(() => import("./pages/resetAlert"));
const SignUpAlert = React.lazy(() => import("./pages/signUpAlert"));
const SetPass = React.lazy(() => import("./pages/setPass"));
const Settings = React.lazy(() => import("./pages/settings"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const Splash = React.lazy(() => import("./pages/splash"));

function App() {
  return (
    <div className="font-Montserrat w-full ">
      <Suspense fallback={<Loading />}>
        <Route path="/" exact>
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
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/Settings">
          <Settings />
        </Route>
        <Route path="/signUpAlert">
          <SignUpAlert />
        </Route>
      </Suspense>
    </div>
  );
}

export default App;
