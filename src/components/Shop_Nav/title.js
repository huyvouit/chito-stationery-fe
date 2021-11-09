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
            <div className="groupDefaut" role="button"
              style={{
                backgroundColor: open ? "#F5F2F0" : "#ffffff",
                boxShadow: open ? "none" : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              onClick={() => toggle(!open)}>
              <h6 className="default">Default Sorting</h6>
              <img
                src={open ? downIcon : upIcon}
                alt="Icon open and close"
              />
            </div>
          </div>
        </div>
      </div>
      {!open && (
        <div className="groupPrice">
          <p className="price">Price: Low To High</p>
          <p className="price">Price: High To Low</p>
        </div>
      )}
    </>
  );
}

export default Title;
