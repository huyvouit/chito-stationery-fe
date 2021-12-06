import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import userApi from "../../api/user_api";
import { useParams } from "react-router";

export const ResetPassword = () => {
  const { token } = useParams();

  const [passwordForm, setPasswordForm] = useState({
    resetLink: token,
    newPassword: "",
    confirmPassword: "",
  });
  const { newPassword, confirmPassword } = passwordForm;
  const [validationMsg, setValidationMsg] = useState({});
  const onChangePassForm = (event) =>
    setPasswordForm({
      ...passwordForm,
      [event.target.name]: event.target.value,
    });

  const validateAll = () => {
    const msg = {};
    if (isEmpty(newPassword)) {
      msg.newPassword = "Please input your new password.";
    } else if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(newPassword)) {
      msg.newPassword = "Password must have character, number and at least 6.";
    }
    if (newPassword !== confirmPassword) {
      msg.confirmPassword = "Confirm password is not matched";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const history = useHistory();

  function handlePushHistory() {
    history.push({
      pathname: "/",
    });
  }

  const submitPassword = async (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    try {
      const body = { resetLink: token, newPassword };
      const formData = await userApi.patchNewPass(body);
      // console.log(formData.data);
      if (formData.data.success) {
        toast.success(formData.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        handlePushHistory();
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
      // console.log(error.response.data.error);
      toast.error("Error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      handlePushHistory();
    }
  };

  return (
    <div className="ac_wrapper" style={{ height: "80vh", marginBottom: "0" }}>
      <h1 className="ac_title" style={{ marginTop: "0" }}>
        Get your new password!
      </h1>
      <p className="ac_content">
        Enter your password and you will have a new password.
      </p>
      <div className="input-field" style={{ marginTop: "40px" }}>
        <p className="form-label"> new password*</p>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={onChangePassForm}
        />
        <p style={{ color: "red" }}>{validationMsg["newPassword"]}</p>
      </div>
      <div className="input-field" style={{ marginTop: "40px" }}>
        <p className="form-label"> confirm password*</p>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangePassForm}
        />
        <p style={{ color: "red" }}>{validationMsg["confirmPassword"]}</p>
      </div>

      <button
        className="auth-btn-submit"
        onClick={submitPassword}
        style={{ marginTop: "20px" }}
      >
        Save
      </button>
    </div>
  );
};
