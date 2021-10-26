import { Button } from "bootstrap";
import React, { useContext, useState } from "react";
import { PopUpContext } from "../../contexts/popup_context";
import "../../style/Shop/Filter.css";
import rightIcon from "../../assets/Icons/right-arrow.svg"
import downIcon from "../../assets/Icons/down-arrow.svg"

function Filter({ show, close }) {
  const { showFilter } = useContext(PopUpContext);

  const [openProduct, setOpenProduct] = useState([]);
  const toggleProduct = () => setOpenProduct(!openProduct);

  const [openPrice, setOpenPrice] = useState([])
  const togglePrice = () => setOpenPrice(!openPrice);


  
  return (
    <div
      className="filter"
      style={{
        transform: showFilter ? "translate(0, 0)" : "translate(-1000px,0)",
        opacity: showFilter ? "1" : "0",
      }}
    >
      <h1>Filter</h1>
      <div
        className="filter-group-product"
        role="button"
        style={{
          borderBottom: openProduct ? "1px solid #966A57" : "none"
        }}
        onClick={() => toggleProduct(!openProduct)}
      >
        <div className="filter-title">
          <p>PRODUCT TYPE</p>
        </div>
        <div className="filter-icon">
          <img src={openProduct ? rightIcon : downIcon} alt="Icon open and close" />
        </div>
      </div>
      {
        !openProduct && (
          <ul>
            <li className="list">
              <button type="button" className="btn-list" >
                <input type="checkbox" id="sticker"></input>
                <label for="sticker">Sticker</label>
              </button>
              <button type="button" className="btn-list">
                <input type="checkbox" id="Sticky"></input>
                <label for="Sticky">Sticky Note</label>
              </button>
              <button type="button" className="btn-list">
                <input type="checkbox" id="Washi"></input>
                <label for="Washi">Washi Tape</label>
              </button>
              <button type="button" className="btn-list">
                <input type="checkbox" id="Gift"></input>
                <label for="Gift">Gift Boxes</label>
              </button>
            </li>
          </ul>
        )
      }
      <div
        className="filter-group-price"
        role="button"
        style={{
          borderBottom: openPrice ? "1px solid #966A57" : "none"
        }}
        onClick={() => togglePrice(!openPrice)}
      >
        <div className="filter-title">
          <p>PRICE {openPrice ? "" : "(VND)"}</p>
        </div>
        <div className="filter-icon">
          <img src={openPrice ? rightIcon : downIcon} alt="Icon open and close" />
        </div>
      </div>
      {
        !openPrice && (
          <div className="group-input">
            <div className="price">
              <input type="number"/>
            </div>
            <div className="line">
              <h2>-</h2>
            </div>
            <div className="price">
              <input type="number"/>
            </div>
          </div>
        )
      }

      <div className="filter-group-btn">
        <button className="btn-clear">
          CLEAR FILTERS
        </button>
        <button className="btn-apply">
          APPLY CHANGES
        </button>
      </div>

    </div>
  );
}

export default Filter;
