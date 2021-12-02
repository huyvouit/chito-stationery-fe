import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { Validation } from "../../Helper/validation";
import { toast } from "react-toastify";
import { PopUpContext } from "../../contexts/popup_context";
import "../../style/Authentication/signup.css";
import eyeShow from "../../assets/Images/eye_show.png";
import eyeHide from "../../assets/Images/eye_hide.png";
import x from "../../assets/Icons/x.svg";

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
  const [showPass, setShowPass] = useState(false);
  const { setShowPopUp } = useContext(PopUpContext);

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

  const handleClosePopup = () => {
    setShowPopUp(false);
  };

  return (
    <div className="signin-container">
      <form className="auth-form">
        <div className="signup-header">
          <h2 className="form-title-signup">Sign up</h2>
          <img src={x} alt="close" onClick={handleClosePopup}/>
        </div>
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
            <div className="password-style">
              <input
                type={showPass ? "text" : "password"}
                required
                name="password"
                value={password}
                onChange={onChangeRegisterForm}
              />
              <img
                src={showPass ? eyeHide : eyeShow}
                alt="icon eye"
                width="18px"
                height="18px"
                onClick={() => setShowPass(!showPass)}
              />
            </div>
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
