import React, { useContext, useState } from "react";
// import authApi from "../../api/auth_api";
import { AuthContext } from "../../contexts/auth_context";
// import AlertMessage from "../Layout/message";
import { Validation } from "../../Helper/validation";
import { toast } from "react-toastify";
import "../../style/Authentication/signup.css";

export const SignUpForm = ({ clickSignIn }) => {
  //authContext
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = registerForm;
  const [errors, setErrors] = useState({});

  //function onChange Input Form
  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  //function submit form
  const register = async (event) => {
    event.preventDefault();

    if (
      // Validation(registerForm) &&
      Object.keys(Validation(registerForm)).length !== 0
    ) {
      console.log("Validate Fail!!");
      setErrors(Validation(registerForm));
      return;
    }

    try {
      setErrors(Validation(registerForm));
      const registerData = await registerUser(registerForm);
      console.log(registerData);
      if (registerData.success) {
        toast.success(registerData.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setRegisterForm({
          fullname: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(registerData.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="signin-container">
      <form className="auth-form">
        <h2 className="form-title-signup">Sign up</h2>
        <div className="form-input-signup">
          <div className="input-field">
            <p className="form-label">Full name*</p>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={onChangeRegisterForm}
            />
            {errors["fullname"] && ( //will work even if data has not declared propertyName
              <p className="validate-error">{errors.fullname}</p>
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
            {errors["email"] && (
              <p className="validate-error">{errors.email}</p>
            )}
          </div>
          <div className="input-field">
            <div className="form-label">Password*</div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangeRegisterForm}
            />
            {errors["password"] && (
              <p className="validate-error">{errors.password}</p>
            )}
          </div>
        </div>
        
        <div className="form-submit-signup">
          <p className="form-linking" onClick={clickSignIn}>
            back to sign in
          </p>
          <button className="auth-btn-submit" onClick={register}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
