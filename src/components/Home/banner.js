import React from "react";
import banner from "../../assets/Images/banner_1.jpg";
import "../../style/Home/banner.css";
export const Banner = () => {
  return (
    <>
      <div className="home-banner-top">
        <img className="image-banner" src={banner} upIcon />
      </div>
    </>
  );
};
