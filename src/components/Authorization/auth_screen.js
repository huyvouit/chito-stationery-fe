import React from "react";

import "../../style/Authorization/auth.css";
export const AuthScreen = ({ show, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translate(-50%, 0vh)" : "translate(-50%,-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <h1>Sign in</h1>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          s<h4>abc</h4>
          <p>abc</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
