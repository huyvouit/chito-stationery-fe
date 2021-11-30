import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import userApi from "../../api/user_api";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  const onChangeForm = (event) => setEmail(event.target.value);

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Please input your email.";
    } else if (!isEmail(email)) {
      msg.email = "Email is invaid.";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const history = useHistory();
  function handlePushHistory() {
    history.push({
      pathname: "/reset-password",
    });
  }

  const submitEmail = async (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    try {
      const body = { email };
      const formData = await userApi.patchForgotPass(body);

      if (formData.data.success) {
        toast.success(formData.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setEmail("");
      } else {
        toast.error(formData.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="ac_wrapper" style={{ height: "80vh", marginBottom: "0" }}>
      <h1 className="ac_title" style={{ marginTop: "0" }}>
        Forgot your password?
      </h1>
      <p className="ac_content">
        No worries! Enter your email and we will send you a reset link.
      </p>
      <div className="input-field" style={{ marginTop: "40px" }}>
        <p className="form-label">email*</p>
        <input type="text" name="email" value={email} onChange={onChangeForm} />
        <p style={{ color: "red" }}>{validationMsg["email"]}</p>
      </div>

      <button
        className="auth-btn-submit"
        onClick={(event) => {
          submitEmail(event);
          //   handlePushHistory();
        }}
        style={{ marginTop: "20px" }}
      >
        Send request
      </button>
    </div>
  );
};
