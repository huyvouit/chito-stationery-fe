import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
// import AlertMessage from "../Layout/message";
import { toast } from "react-toastify";
import { PopUpContext } from "../../contexts/popup_context";
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

  // const [alert, setAlert] = useState(null);

  const { email, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

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
      // setAlert({ type: "danger", message: loginData.error });
      // setTimeout(() => setAlert(null), 10000);
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
              required
              name="email"
              value={email}
              onChange={onChangeLoginForm}
            />
          </div>
          <div className="input-field">
            <p className="form-label">password*</p>
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={onChangeLoginForm}
            />
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
