import React, { useContext, useState } from "react";
import { PopUpContext } from "../../contexts/popup_context";
import "../../style/Shop/Filter.css";
import rightIcon from "../../assets/Icons/right-arrow.svg";
import downIcon from "../../assets/Icons/down-arrow.svg";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { FilterContext } from "../../contexts/filter_context";

function Filter() {
  const { showFilter, closePopUp } = useContext(PopUpContext);
  const { query, handleQuery } = useContext(FilterContext);
  const [openProduct, setOpenProduct] = useState([]);
  const toggleProduct = () => setOpenProduct(!openProduct);

  const [openPrice, setOpenPrice] = useState([]);
  const togglePrice = () => setOpenPrice(!openPrice);

  const arrayType = ["sticker", "sticky note", "washi tape"];
  const [arrrayFilter, setArrayFilter] = useState({
    type: [],
    lowerPrice: [],
    higherPrice: [],
  });

  const history = useHistory();

  function handlePushHistory() {
    history.push({
      pathname: "/shop",
      search: queryString.stringify(arrrayFilter),
    });

    handleQuery(arrrayFilter);
    closePopUp();
  }

  const handleOnChangeType = (itemType) => {
    let newArrayTypeSelected = arrrayFilter["type"];

    if (newArrayTypeSelected && newArrayTypeSelected.includes(itemType)) {
      newArrayTypeSelected = newArrayTypeSelected.filter(
        (item) => item !== itemType
      );
    } else {
      newArrayTypeSelected.push(itemType);
    }

    setArrayFilter({
      ...arrrayFilter,
      type: newArrayTypeSelected,
    });
  };

  const isCheckBox = (itemType) => {
    return arrrayFilter.type.includes(itemType) ? "true" : "false";
  };
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
          borderBottom: openProduct ? "1px solid var(--underline)" : "none",
        }}
        onClick={() => toggleProduct(!openProduct)}
      >
        <div className="filter-title">
          <p>PRODUCT TYPE</p>
        </div>
        <div className="filter-icon">
          <img
            src={openProduct ? rightIcon : downIcon}
            alt="Icon open and close"
          />
        </div>
      </div>
      {!openProduct && (
        <ul className="list-type">
          {arrayType.map((itemType, index) => (
            <li key={index} className="list">
              <button type="button" className="btn-list">
                <input
                  type="checkbox"
                  id={itemType}
                  // checked={isCheckBox}
                  onClick={() => handleOnChangeType(itemType)}
                ></input>
                <label htmlFor={itemType}>{itemType}</label>
              </button>
            </li>
          ))}
        </ul>
      )}
      <div
        className="filter-group-price"
        role="button"
        style={{
          borderBottom: openPrice ? "1px solid var(--underline)" : "none",
        }}
        onClick={() => togglePrice(!openPrice)}
      >
        <div className="filter-title">
          <p>PRICE {openPrice ? "" : "(VND)"}</p>
        </div>
        <div className="filter-icon">
          <img
            src={openPrice ? rightIcon : downIcon}
            alt="Icon open and close"
          />
        </div>
      </div>
      {!openPrice && (
        <div className="group-input">
          <div className="price">
            <input type="number" />
          </div>
          <div className="line">
            <h2>-</h2>
          </div>
          <div className="price">
            <input type="number" />
          </div>
        </div>
      )}

      <div className="filter-group-btn">
        <button className="btn-clear">CLEAR FILTERS</button>
        <button className="btn-apply" onClick={handlePushHistory}>
          APPLY CHANGES
        </button>
      </div>
    </div>
  );
}

export default Filter;
