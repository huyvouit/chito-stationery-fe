import React from "react";

export const SignInform = ({ clickSignUp }) => {
  return (
    <div className="signin-signup-container">
      <div className="auth-image"></div>
      <div className="content-right">
        <form action="#" className="auth-form">
          <h2 className="form-title">Sign in</h2>
          <div className="form-input">
            <div className="input-field">
              <p className="form-label">username*</p>
              <input type="text" required />
            </div>
            <div className="input-field">
              <p className="form-label">password*</p>
              <input type="password" required />
            </div>
          </div>
          <div className="form-submit">
            <p className="form-linking" onClick={clickSignUp}>
              create a account
            </p>
            <input type="submit" value="Login" className="auth-btn-submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
