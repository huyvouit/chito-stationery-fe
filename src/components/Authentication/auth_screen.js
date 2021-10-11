import React, { useState } from "react";

import "../../style/Authentication/auth.css";
//component
import "./signin_form";
import { SignInform } from "./signin_form";
import "./signup_form";
import { SignUpForm } from "./signup_form";
export const AuthScreen = ({ show, close }) => {
  const [isSignin, setIsSignin] = useState(true);

  const handleIsSignIn = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div
      className="signin-signup"
      style={{
        transform: show ? "translate(-50%, 0vh)" : "translate(-50%,-1000px)",
        opacity: show ? "1" : "0",
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
