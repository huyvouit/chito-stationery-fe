import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PopUpContextProvider from "./contexts/popup_context";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <PopUpContextProvider>
      <App />
    </PopUpContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
