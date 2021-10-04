import React from "react";
import Cards from "./Cards";
import Title from "./title";
import '../../style/Shop/Shop_screen.css';

export const ShopScreen = () => {
  return (
    <>
      <div className="ShopScreen">
        <Title
          head="ALL PRODUCT"
          item="26"
        />
        <Cards/>
      </div>
    </>
  )
};
