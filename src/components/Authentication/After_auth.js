import React from "react";
import check from "../../assets/Icons/check.svg";
import { Link } from "react-router-dom";
import { TOKEN_NAME, REFTOKEN } from "../constants/constant";

export const AfterAuth = () => {
  return (
    <div className="ac_wrapper">
      <h1 className="ac_title">WELCOME TO CHITO STATIONERY</h1>
      <p className="ac_content">
        Your account has been successfully activated.
      </p>
      <p className="ac_content">Enjoy shopping with us!</p>
      <img className="ac_icon" src={check} alt="cart-tick"></img>
      <Link to="/" className="error_btn">
        START SHOPPING
      </Link>
    </div>
  );
};
