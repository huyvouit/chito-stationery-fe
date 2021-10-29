import React, { useContext } from "react";
import filterIcon from "../../assets/Icons/filter.svg";
import "../../style/Shop/Title.css";

function Title(props) {
  return (
    <>
      <div className="title">
        <div className="title-head">
          <h1 className="title-head-name">ALL PRODUCTS</h1>
        </div>
        <div className="title-content">
          <div className=" title-content-left">
            <img
              className="image-icon"
              src={filterIcon}
              width="20px"
              height="20px"
              alt="React Logo"
              onClick={props.onClickFilter}
            />
            <h6>FILTERS</h6>
          </div>
          <div className="title-content-right">
            <p>{props.item} items</p>
            <strong>|</strong>
            <h6>BEST SELLERS</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
