import React, { useContext, useEffect, useState } from "react";
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
  const [openProduct, setOpenProduct] = useState(false);
  const toggleProduct = () => setOpenProduct(!openProduct);

  const [openPrice, setOpenPrice] = useState(false);
  const togglePrice = () => setOpenPrice(!openPrice);

  const initArrayType = [
    {
      name: "sticker",
      check: false,
    },
    {
      name: "sticky note",
      check: false,
    },
    {
      name: "washi tape",
      check: false,
    },
  ];
  const [arrType, setType] = useState(initArrayType);

  const [arrayFilter, setArrayFilter] = useState({
    type: query?.type || [],
    lowerPrice: query?.lowerPrice || [],
    higherPrice: query?.higherPrice || [],
    sortType: query?.sortType || [],
  });

  useEffect(() => {
    // set
    setArrayFilter({
      ...arrayFilter,
      type: query?.type || [],
      lowerPrice: query?.lowerPrice || [],
      higherPrice: query?.higherPrice || [],
      sortType: query?.sortType || [],
    });
    const temp = [...arrType];

    if (query?.type) {
      temp.forEach((item) => {
        const index = query.type.includes(item.name);
        if (index) {
          item.check = true;
        } else {
          item.check = false;
        }
      });
      setType(temp);
    } else {
      setType(initArrayType);
    }
  }, [query]);

  const history = useHistory();
  function handlePushHistory() {
    history.push({
      pathname: "/shop",
      search: queryString.stringify(arrayFilter),
    });

    handleQuery(arrayFilter);
    closePopUp();
  }
  function handleClearFilter() {
    history.push({
      pathname: "/shop",
    });
    handleQuery({});
  }

  const handleOnChangeType = (itemType) => {
    let newArrayTypeSelected = arrayFilter["type"];

    //handle select item exist
    if (newArrayTypeSelected && newArrayTypeSelected.includes(itemType.name)) {
      newArrayTypeSelected = newArrayTypeSelected.filter(
        (item) => item !== itemType.name
      );
    } else {
      newArrayTypeSelected.push(itemType.name);
    }
    //update arrayFilter
    setArrayFilter({
      ...arrayFilter,
      type: newArrayTypeSelected,
    });

    // handle check in checkbox
    const temp = [...arrType];
    const index = temp.findIndex((item) => item.name === itemType.name);
    temp[index].check = !temp[index].check;
    setType(temp);
  };

  const handleInputPrice = (event) => {
    event.preventDefault();
    setArrayFilter({
      ...arrayFilter,
      [event.target.name]: event.target.value || [],
    });
  };

  return (
    <div
      className="filter"
      style={{
        transform: showFilter ? "translate(0, 0)" : "translate(-1000px,0)",
        opacity: showFilter ? "1" : "0",
      }}
    >
      <div className="filter-header">
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
            {arrType.map((item, index) => (
              <li key={index} className="list">
                <div className="btn-list">
                  <label htmlFor={item.name}>
                    {item.name}
                    <input
                      type="checkbox"
                      id={item.name}
                      checked={item.check}
                      onChange={() => handleOnChangeType(item)}
                    ></input>
                    <span className="custom-checkbox"></span>
                  </label>
                </div>
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
              <input
                type="number"
                min="0"
                name="higherPrice"
                value={arrayFilter.higherPrice}
                onChange={handleInputPrice}
              />
            </div>
            <div className="line">
              <h2>-</h2>
            </div>
            <div className="price">
              <input
                type="number"
                min="0"
                name="lowerPrice"
                value={arrayFilter.lowerPrice}
                onChange={handleInputPrice}
              />
            </div>
          </div>
        )}
      </div>
      <div className="filter-group-btn">
        <button className="btn-clear" onClick={handleClearFilter}>
          CLEAR FILTERS
        </button>
        <button className="btn-apply" onClick={handlePushHistory}>
          APPLY CHANGES
        </button>
      </div>
    </div>
  );
}

export default Filter;
