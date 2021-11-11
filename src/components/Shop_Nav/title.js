import React, { useContext,useState } from "react";
import filterIcon from "../../assets/Icons/filter.svg";
import "../../style/Shop/Title.css";

function Title(props) {
  const newProductList = props.productList; 

  function sortMin(){
    props.setProductList(props.productList.sort((a, b) => (a.price.$numberDecimal - b.price.$numberDecimal)));
    console.log("min");
  }

  function sortMax(){
    props.setProductList(props.productList.sort((a, b) => (b.price.$numberDecimal - a.price.$numberDecimal)));
    console.log("max");
  }

  function OnChange(event){
    if(event.target.value ===  "1")
    {
      sortMin();
    }
    if (event.target.value === "2"){
      sortMax();
    }
  }
  console.log(props.productList);
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
            <select className="default" onChange={ OnChange}>
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
