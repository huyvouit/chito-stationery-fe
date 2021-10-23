import React from "react";
import "../../style/Loader/loader.css";
export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-box">
        <div className="circle-loading">
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
    </div>
  );
};
