import React, { useContext, useState } from "react";
//context
import { PopUpContext } from "../../contexts/popup_context";
import "../../style/Authentication/auth.css";
//component
import "./signin_form";
import { SignInform } from "./signin_form";
import "./signup_form";
import { SignUpForm } from "./signup_form";
export const AuthScreen = () => {
  const [isSignin, setIsSignin] = useState(true);

  const { showPopUp } = useContext(PopUpContext);

  const handleIsSignIn = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div
      className="signin-signup"
      style={{
        transform: showPopUp
          ? "translate(-50%, 0vh)"
          : "translate(-50%,-1000px)",
        opacity: showPopUp ? "1" : "0",
      }}
    >
      {isSignin ? (
        <SignInform clickSignUp={handleIsSignIn} />
      ) : (
        <SignUpForm clickSignIn={handleIsSignIn} />
      )}
    </div>
  );
};
