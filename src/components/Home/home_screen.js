import React from "react";
//css
import "../../style/Home/home.css";
//component
import { Intro } from "./intro";
import { Banner } from "./banner";
import { Marketing } from "./marketing";
import banner2 from "../../assets/Images/poster_home.jpg"

export const HomeScreen = () => {
  return (
    <>
      <div className="home-screen">
        <Banner />
        <Intro />
        <Marketing />
        <div className="banner2">
          <div className="banner2-img">
            <img src={banner2} alt="banner2"></img>
          </div>
          <div className="banner2-content">
            <h2>SUSTAINABLY-SOURCED PAPER</h2>
            <p>
                We have an unwavering commitment to quality and provenance. We
                will only use papers that are sustainably sourced, and we work
                closely with our local, expert factories to meet our exacting
                standards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
