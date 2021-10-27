import React, { useState, useEffect } from "react";
//lib
import queryString from "query-string";
import { useQuery } from "../../Helper/use_query";
import { Link } from "react-router-dom";
import productApi from "../../api/product_api";
//css
import "../../style/Shop/Shop_screen.css";
//component
import ErrorImage from "../../assets/Icons/404_Error.svg";
import Cards from "./Cards";
import Title from "./title";
import { Loader } from "../Layout/loader";
export const ShopScreen = ({ onClickFilter }) => {
  const query = queryString.parse(useQuery());
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("useEfect");

    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const params = query;
      console.log("params: ", params);
      const response = await productApi.getByFilter(params);
      // console.log(productList);
      // console.log(response.data);
      setProductList(response.data.filteredProducts);
      setIsLoading(false);
      // console.log(productList);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  return isLoading ? (
    <Loader />
  ) : productList.length === 0 ? (
    <div className="error">
      <img className="error_image" src={ErrorImage} alt="404 error" />
      <h2 className="error_msg">Uh oh! Looks like you got lost.</h2>
      <Link to="/" className="error_btn">
        BACK TO HOME
      </Link>
    </div>
  ) : (
    <>
      <div className="ShopScreen">
        <Title item={productList.length} onClickFilter={onClickFilter} />
        <Cards productList={productList} />
      </div>
    </>
  );
};
