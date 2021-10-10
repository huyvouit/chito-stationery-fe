import React, { useState } from "react";
import authApi from "../../api/auth_api";
import AlertMessage from "../Layout/message";

export const SignUpForm = ({ clickSignIn }) => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = registerForm;
  const [alert, setAlert] = useState(null);

  //function onChange Input Form
  function onChangeRegisterForm(event) {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  }
  //function post to server
  const registerUser = async (userForm) => {
    try {
      const response = await authApi.postSignUp(userForm);
      if (response.data) {
        console.log(`data: ${response.data}`);
      }

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) return error.response.data;
    }
  };

  //function submit form
  const register = async (event) => {
    event.preventDefault();

    try {
      const registerData = await registerUser(registerForm);
      if (registerData) {
        console.log("thanh cong");
        setAlert({ type: "success", message: `Successfully. ${registerData}` });
        setTimeout(() => setAlert(null), 6000);
      }
    } catch (error) {
      console.log(error);
      setAlert({ type: "danger", message: { error } });
      setTimeout(() => setAlert(null), 5000);
    }
  };

  return (
    <div className="signin-signup-container">
      <div className="auth-image">
        <AlertMessage info={alert} />
      </div>
      <div className="content-right">
        <form className="auth-form" onSubmit={register}>
          <h2 className="form-title">Sign up</h2>
          <div className="form-input">
            <div className="input-field">
              <p className="form-label">Username*</p>
              <input
                type="text"
                name="username"
                required
                value={username}
                onChange={onChangeRegisterForm}
              />
            </div>
            <div className="input-field">
              <div className="form-label">Email*</div>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={onChangeRegisterForm}
              />
            </div>
            <div className="input-field">
              <div className="form-label">Password*</div>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={onChangeRegisterForm}
              />
            </div>
          </div>
          <div className="form-submit">
            <p className="form-linking" onClick={clickSignIn}>
              back to sign in
            </p>
            <input type="submit" className="auth-btn-submit" value="Sign up" />
          </div>
        </form>
      </div>
    </div>
  );
};
