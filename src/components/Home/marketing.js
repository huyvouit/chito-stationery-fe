import React, { useContext } from "react";
import "../../style/Home/marketing.css";

import washiTape from "../../assets/Images/washi_tape.jpg";
import sticker from "../../assets/Images/sticker.jpg";
import stickyNote from "../../assets/Images/sticky_note.jpg";
import { Link } from "react-router-dom";
import { FilterContext } from "../../contexts/filter_context";

export const Marketing = () => {
  const { handleQuery } = useContext(FilterContext);
  return (
    <div className="marketing">
      <div className="marketing-title">
        <h2 className="marketing-title-name">shop all stationery</h2>
      </div>
      <div className="marketing-cards">
        <div className="marketing-child-card">
          <Link
            to="/shop?type=sticker"
            className="marketing-child"
            onClick={() => {
              handleQuery({ type: ["sticker"] });
            }}
          >
            <div className="marketing-img">
              <img src={sticker} alt="sticker" />
            </div>
            <div className="marketing-script">
              <p>STICKER</p>
            </div>
          </Link>
        </div>
        <div className="marketing-child-card">
          <Link
            to="/shop?type=washi%20tape"
            className="marketing-child"
            onClick={() => {
              handleQuery({ type: ["washi tape"] });
            }}
          >
            <div className="marketing-img">
              <img src={washiTape} alt="washi-tape" />
            </div>
            <div className="marketing-script">
              <p>WASHI TAPE</p>
            </div>
          </Link>
        </div>
        <div className="marketing-child-card">
          <Link
            to="/shop?type=sticky%20note"
            className="marketing-child"
            onClick={() => {
              handleQuery({ type: ["sticky note"] });
            }}
          >
            <div className="marketing-img">
              <img src={stickyNote} alt="sticky-note" />
            </div>
            <div className="marketing-script">
              <p>STICKY NOTE</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
