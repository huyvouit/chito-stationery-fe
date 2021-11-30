import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";
import userApi from "../../api/user_api";
import { toast } from "react-toastify";
import eyeShow from "../../assets/Images/eye_show.png";
import eyeHide from "../../assets/Images/eye_hide.png";
import isEmpty from "validator/lib/isEmpty";

export const AccInfo = () => {
  const [isChangePass, setIsChangePass] = useState(false);
  const {
    authState: { authLoading, user },
  } = useContext(AuthContext);
  const handleIsChangePass = () => {
    setIsChangePass(!isChangePass);
  };

  const [passwordForm, setPasswordForm] = useState({
    email: user.email || "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { oldPassword, newPassword, confirmPassword } = passwordForm;

  const [showCurPass, setShowCurPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [validationMsg, setValidationMsg] = useState({});

  //handle change password
  const onChangePassForm = (event) =>
    setPasswordForm({
      ...passwordForm,
      email: user.email,
      [event.target.name]: event.target.value,
    });

  //handle submit
  const handlleSubmitChangePass = async (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    try {
      const passData = await userApi.patchChangePass(passwordForm);
      if (passData.data.success) {
        toast.success(passData.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setPasswordForm({
          email: user.email || "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  //check validate
  const validateAll = () => {
    const msg = {};
    if (isEmpty(oldPassword)) {
      msg.oldPassword = "Please input your old password.";
    }
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

  return (
    <>
      {authLoading ? (
        <Loader />
      ) : (
        <div className="account-info-container">
          <div className="account-info">
            <div className="profile-col-width">
              <h2>Account Information</h2>
              <h5 className="profile-info-subtitle">FULL NAME</h5>
              <div className="profile-info-input">
                <p>{user.fullname}</p>
              </div>
              <h5 className="profile-info-subtitle">EMAIL</h5>
              <div className="profile-info-input">
                <p>{user.email}</p>
              </div>
              <label className="container profile-info-subtitle">
                CHANGE PASSWORD
                <input type="checkbox" onClick={handleIsChangePass} />
                <span className="checkmark"></span>
              </label>
            </div>
            {isChangePass ? (
              <div className="profile-col-width ">
                <h2>Change Password</h2>
                <h5 className="profile-info-subtitle">CURRENT PASSWORD*</h5>
                <div className="profile-info-input">
                  <input
                    type={showCurPass ? "text" : "password"}
                    name="oldPassword"
                    value={oldPassword}
                    onChange={onChangePassForm}
                  />
                  <img
                    src={showCurPass ? eyeHide : eyeShow}
                    alt="icon eye"
                    width="18px"
                    height="18px"
                    style={{ opacity: "0.7" }}
                    onClick={() => setShowCurPass(!showCurPass)}
                  />
                </div>
                <p style={{ color: "red" }}>{validationMsg["oldPassword"]}</p>
                <h5 className="profile-info-subtitle">NEW PASSWORD*</h5>
                <div className="profile-info-input">
                  <input
                    type={showNewPass ? "text" : "password"}
                    name="newPassword"
                    value={newPassword}
                    onChange={onChangePassForm}
                  />
                  <img
                    src={showNewPass ? eyeHide : eyeShow}
                    alt="icon eye"
                    width="18px"
                    height="18px"
                    style={{ opacity: "0.7" }}
                    onClick={() => setShowNewPass(!showNewPass)}
                  />
                </div>
                <p style={{ color: "red" }}>{validationMsg["newPassword"]}</p>
                <h5 className="profile-info-subtitle">CONFIRM NEW PASSWORD*</h5>
                <div className="profile-info-input">
                  <input
                    type={showConfirmPass ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChangePassForm}
                  />
                  <img
                    src={showConfirmPass ? eyeHide : eyeShow}
                    alt="icon eye"
                    width="18px"
                    height="18px"
                    style={{ opacity: "0.7" }}
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  />
                </div>
                <p style={{ color: "red" }}>
                  {validationMsg["confirmPassword"]}
                </p>
              </div>
            ) : (
              <div className="profile-col-width "></div>
            )}
          </div>
          <div className="info-footer">
            {/* <p>
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                className="signin_link"
                href="https://policies.google.com/privacy"
                rel="noreferrer"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="signin_link"
                href="https://policies.google.com/terms"
                rel="noreferrer"
                target="_blank"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p> */}
            {isChangePass && (
              <button className="btn-save" onClick={handlleSubmitChangePass}>
                SAVE
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
