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
      </div>
    </>
  );
};
