import React, { useContext, useState } from "react";
import filterIcon from "../../assets/Icons/filter.svg";
import "../../style/Shop/Title.css";
import upIcon from "../../assets/Icons/up.svg";
import downIcon from "../../assets/Icons/down-arrow.svg";

function Title(props) {
  const [open, setOpen] = useState([]);
  const toggle = () => setOpen(!open);
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
            <select className="default" >
              <option className="price">Default Sorting</option>
              <option className="price">Price: Low To High</option>
              <option className="price">Price: High To Low</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
