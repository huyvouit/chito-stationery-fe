import React, { useContext, useState, useEffect } from "react";
import filterIcon from "../../assets/Icons/filter.svg";
import { ProductContext } from "../../contexts/product_context";
import "../../style/Shop/Title.css";

function Title(props) {
  const { productList, setProductList } = useContext(ProductContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(productList);
  }, []);

  function sortMin() {
    const x = [...productList].sort(
      (a, b) => a.price.$numberDecimal - b.price.$numberDecimal
    );
    setProductList(x);
    console.log("min");
  }

  function sortMax() {
    const x = [...productList].sort(
      (a, b) => b.price.$numberDecimal - a.price.$numberDecimal
    );
    setProductList(x);
    console.log("max");
  }

  function OnChange(event) {
    if (event.target.value === "0") {
      setProductList(list);
    }
    if (event.target.value === "1") {
      sortMin();
    }
    if (event.target.value === "2") {
      sortMax();
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
            <select className="default" onChange={OnChange}>
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
