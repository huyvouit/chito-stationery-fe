import React, { useContext, useState } from "react";

//context
import { PopUpContext } from "../../contexts/popup_context";
//css
import "../../style/Layout/search_box.css";
import iconClose from "../../assets/Icons/cancel.svg";
//component

export const SearchBox = () => {
  //   const [isSignin, setIsSignin] = useState(true);

  const { showSearch } = useContext(PopUpContext);

  return (
    <div
      className="search-box"
      style={{
        // transform: showSearch
        //   ? "translate(-50%, 0vh)"
        //   : "translate(-50%,-1000px)",
        opacity: showSearch ? "1" : "0",
        zIndex: showSearch ? "99" : "-1",
      }}
    >
      <div className="search-main">
        <div className="search-text">
          <div className="icon-close-search">
            <img
              className="image-icon"
              src={iconClose}
              width="20px"
              height="20px"
              alt="cart icon"
            />
          </div>
          <form className="search-input">
            <input type="text" />
          </form>
        </div>
        <div className="search-result"></div>
      </div>
    </div>
  );
};
