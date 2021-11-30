import React, { useContext } from "react";
import queryString from "query-string";
import filterIcon from "../../assets/Icons/filter.svg";
import { ProductContext } from "../../contexts/product_context";
import { FilterContext } from "../../contexts/filter_context";
import { useHistory } from "react-router-dom";
import "../../style/Shop/Title.css";

function Title(props) {
  const { productList } = useContext(ProductContext);
  const { query, handleQuery } = useContext(FilterContext);

  // function sortMin() {
  //   const x = [...productList].sort(
  //     (a, b) => a.price.$numberDecimal - b.price.$numberDecimal
  //   );
  //   setProductList(x);
  //   console.log("min");
  // }

  // function sortMax() {
  //   const x = [...productList].sort(
  //     (a, b) => b.price.$numberDecimal - a.price.$numberDecimal
  //   );
  //   setProductList(x);
  //   console.log("max");
  // }

  const history = useHistory();
  function handlePushHistory(params) {
    history.push({
      pathname: "/shop",
      search: queryString.stringify(params),
    });

    handleQuery(params);
  }

  function OnChange(event) {
    if (event.target.value === "0") {
      const params = { ...query, sortType: [] };

      handlePushHistory(params);
    }
    if (event.target.value === "1") {
      const params = { ...query, sortType: 1 };

      handlePushHistory(params);
    }
    if (event.target.value === "2") {
      const params = { ...query, sortType: 2 };

      handlePushHistory(params);
    }
  }

  return (
    <>
      <div className="title">
        <div className="title-head">
          <h1
            className="title-head-name"
            style={{ textTransform: "uppercase" }}
          >
            {props.header}
          </h1>
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
            <p>{productList.length} items</p>
            <strong>|</strong>
            <select
              className="default"
              onChange={OnChange}
              value={query?.sortType || []}
            >
              <option value="0">Default Sorting</option>
              <option value="1">Price: Low To High</option>
              <option value="2">Price: High To Low</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
