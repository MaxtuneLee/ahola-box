import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot,atom } from "recoil";
import App from "./App";
import "./index.css";


export const userDataState = atom({
  key: "userDataState",
  default: {
    userID: -1,
    username: "",
    email: "",
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
