import React, { useState, useContext } from "react";
import { SideBar } from "./SideBar";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";
import userApi from "../../api/user_api";
import { toast } from "react-toastify";
export const AccInfo = () => {
  const [isChangePass, setIsChangePass] = useState(false);
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);
  const handleIsChangePass = () => {
    console.log("sdsd");
    setIsChangePass(!isChangePass);
  };

  const [passwordForm, setPasswordForm] = useState({
    email: user.email || "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { oldPassword, newPassword, confirmPassword } = passwordForm;
  const [errors, setErrors] = useState("");
  const onChangePassForm = (event) =>
    setPasswordForm({
      ...passwordForm,
      email: user.email,
      [event.target.name]: event.target.value,
    });

  const handlleSubmitChangePass = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      console.log("Validate Fail!!");
      setErrors("Confirm password is not matched");
      return;
    }

    try {
      setErrors("");
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
      console.log("error pass", error.response.data);
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

  return (
    <>
      {authLoading ? (
        <Loader />
      ) : (
        <div className="profile-wrapper">
          <h1 className="profile-title">MY ACCOUNT</h1>
          <div className="profile-content">
            <SideBar />
            <div>
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
                {isChangePass && (
                  <div className="profile-col-width ">
                    <h2>Change Password</h2>
                    <h5 className="profile-info-subtitle">CURRENT PASSWORD*</h5>
                    <div className="profile-info-input">
                      <input
                        type="password"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={onChangePassForm}
                      />
                    </div>
                    <h5 className="profile-info-subtitle">NEW PASSWORD*</h5>
                    <div className="profile-info-input">
                      <input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={onChangePassForm}
                      />
                    </div>
                    <h5 className="profile-info-subtitle">
                      CONFIRM NEW PASSWORD*
                    </h5>
                    <div className="profile-info-input">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={onChangePassForm}
                      />
                    </div>
                    {errors && ( //will work even if data has not declared propertyName
                      <p className="validate-error">{errors}</p>
                    )}
                  </div>
                )}
              </div>
              <div className="info-footer">
                <p>
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
                </p>
                {isChangePass && (
                  <button
                    className="btn-save"
                    onClick={handlleSubmitChangePass}
                  >
                    SAVE
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
