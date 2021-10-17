import React, { useContext, useState } from "react";
// import authApi from "../../api/auth_api";
import { AuthContext } from "../../contexts/auth_context";
// import AlertMessage from "../Layout/message";
import { Validation } from "../../Helper/validation";
import { toast } from "react-toastify";
export const SignUpForm = ({ clickSignIn }) => {
  //authContext
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = registerForm;
  const [errors, setErrors] = useState({});

  //function onChange Input Form
  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  // const checkValidate = () => {
  //   setErrors(Validation(registerForm));
  //   console.log(Object.keys(errors).length);
  //   console.log(errors);
  //   console.log(registerForm);
  //   if (Object.keys(errors).length > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  //function submit form
  const register = async (event) => {
    event.preventDefault();
    setErrors(Validation(registerForm));
    console.log(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      const registerData = await registerUser(registerForm);

      toast.success(registerData, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.log(error);
      toast.error(error, {
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
    <div className="signin-signup-container">
      <form className="auth-form" onSubmit={register}>
        <h2 className="form-title">Sign up</h2>
        <div className="form-input">
          <div className="input-field">
            <p className="form-label">Username*</p>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChangeRegisterForm}
            />
            {errors.username && (
              <p className="validate-error">{errors.username}</p>
            )}
          </div>
          <div className="input-field">
            <div className="form-label">Email*</div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChangeRegisterForm}
            />
            {errors.email && <p className="validate-error">{errors.email}</p>}
          </div>
          <div className="input-field">
            <div className="form-label">Password*</div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangeRegisterForm}
            />
            {errors.password && (
              <p className="validate-error">{errors.password}</p>
            )}
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
  );
};
