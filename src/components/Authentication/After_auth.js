import React, { useEffect, useContext } from "react";
import check from "../../assets/Icons/check.svg";
import { Link } from "react-router-dom";
import { TOKEN_NAME, REFTOKEN } from "../../constants/constant";
import { useParams } from "react-router";

export const AfterAuth = () => {
  const { access, refresh } = useParams();

  useEffect(() => {
    console.log(access, refresh);
    // const string = token.split("/");
    localStorage.setItem(TOKEN_NAME, access);
    localStorage.setItem(REFTOKEN, refresh);
  }, []);

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
