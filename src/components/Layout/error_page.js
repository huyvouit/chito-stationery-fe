import React from "react";
import ErrorImage from "../../assets/Icons/404 Error.svg";
import "../../style/error.css";

export const ErrorPage = () => {
  return (
    <>
      <div className="error">
        <img className="error_image" src={ErrorImage} alt="404 error" />
        <h2 className="error_msg">Uh oh! Looks like you got lost.</h2>
        <button className="error_btn" onclick="">BACK TO PREVIOUS PAGE</button>
      </div>
    </>
  )
}