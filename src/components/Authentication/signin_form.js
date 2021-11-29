import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
import eyeShow from "../../assets/Images/eye_show.png";
import eyeHide from "../../assets/Images/eye_hide.png";
import { toast } from "react-toastify";
import { PopUpContext } from "../../contexts/popup_context";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import "../../style/Authentication/signin.css";

export const SignInform = ({ clickSignUp }) => {
  // Context
  const { loginUser } = useContext(AuthContext);
  const { setShowPopUp } = useContext(PopUpContext);
  // Local state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [validationMsg, setValidationMsg] = useState({});

  const { email, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Please input your email.";
    } else if (!isEmail(email)) {
      msg.email = "Email is invaid.";
    }
    if (isEmpty(password)) {
      msg.password = "Please input your password.";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const login = async (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    try {
      const loginData = await loginUser(loginForm);
      // console.log(loginData.success, loginData.message);
      if (loginData.success) {
        toast.success(loginData.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setShowPopUp(false);
      } else {
        toast.error(loginData.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-container">
      <form className="auth-form" onSubmit={login}>
        <h2 className="form-title">Sign in</h2>
        <div className="form-input">
          <div className="input-field">
            <p className="form-label">email*</p>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChangeLoginForm}
            />
            <p style={{ color: "red" }}>{validationMsg["email"]}</p>
          </div>
          <div className="input-field">
            <p className="form-label">password*</p>
            <div className="password-style">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={password}
                onChange={onChangeLoginForm}
              />

              <img
                src={showPass ? eyeHide : eyeShow}
                alt="icon eye"
                width="18px"
                height="18px"
                onClick={() => setShowPass(!showPass)}
              />
            </div>
            <p style={{ color: "red" }}>{validationMsg["password"]}</p>
          </div>
        </div>

        <div className="form-submit">
          <p className="form-linking" onClick={clickSignUp}>
            create an account
          </p>
          <input type="submit" value="Login" className="auth-btn-submit" />
        </div>
      </form>
    </div>
  );
};
