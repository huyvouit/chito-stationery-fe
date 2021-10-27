import React from "react";
import ErrorImage from "../../assets/Icons/404_Error.svg";
import "../../style/error.css";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="error">
      <img className="error_image" src={ErrorImage} alt="404 error" />
      <h2 className="error_msg">Uh oh! Looks like you got lost.</h2>
      <Link to="/" className="error_btn">
        BACK TO HOME
      </Link>
    </div>
  );
};
