import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
 import { BrowserRouter } from "react-router-dom";

import { SidebarProvider } from "../src/store/sidebercontext";

ReactDOM.render(
  <BrowserRouter>
  <SidebarProvider>
    <App />
  </SidebarProvider></BrowserRouter>,
  document.getElementById("root")
);
