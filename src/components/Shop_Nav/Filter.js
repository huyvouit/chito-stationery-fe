import React, { useContext } from "react";
import { PopUpContext } from "../../contexts/popup_context";
import "../../style/Shop/Filter.css";

function Filter({ show, close }) {
  const { showFilter } = useContext(PopUpContext);
  return (
    <div
      className="filter"
      style={{
        transform: showFilter ? "translate(0, 0)" : "translate(-1000px,0)",
        opacity: showFilter ? "1" : "0",
      }}
    >
      <h1>Halo</h1>
    </div>
  );
}

export default Filter;
