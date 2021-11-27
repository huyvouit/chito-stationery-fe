import React from "react";
//css
import "../../style/Home/home.css";
//component
import { Intro } from "./intro";
import { Banner } from "./banner";
import { Marketing } from "./marketing";

export const HomeScreen = () => {
  return (
    <>
      <div className="home-screen">
        <Banner />
        <Intro />
        <Marketing />
        <div className="parallax">
          <div className="parallax-bg">
            <div className="parallax-content">
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
      </div>
    </>
  );
};
