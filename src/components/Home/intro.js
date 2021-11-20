import React from "react";
import "../../style/Home/intro.css";
import "aos/dist/aos.css";

export const Intro = () => {
  return (
    <>
      <div className="intro-main">
        <div className="intro-title">
          <h1 className="intro-title-name">The modern stationery</h1>
        </div>
        <div className="intro-content">
          <p className="intro-content-text">
            At Chito Stationery we have stationery that is minimal, understated,
            and extremely good quality. We proudly share every last detail of
            our sustainably-sourced materials, and expert making in the UK and
            Northern Europe.
          </p>
        </div>
      </div>
    </>
  );
};
