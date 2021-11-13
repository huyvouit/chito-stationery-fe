import React, { useState, useEffect, useContext } from "react";
//lib
import { Link } from "react-router-dom";
import productApi from "../../api/product_api";
//css
import "../../style/Shop/Shop_screen.css";
//component
import ErrorImage from "../../assets/Icons/404_Error.svg";
import Cards from "./Cards";
import Title from "./title";
import { Loader } from "../Layout/loader";
import { FilterContext } from "../../contexts/filter_context";
import { ProductContext } from "../../contexts/product_context";

export const ShopScreen = ({ onClickFilter }) => {
  // const query = queryString.parse(useQuery());
  const { query } = useContext(FilterContext);

  const [isLoading, setIsLoading] = useState(true);

  const { productList, setProductList } = useContext(ProductContext);
  // const [query, setQuery] = useState(queryString.parse(useQuery()));
  useEffect(() => {
    console.log("useEfect");
    setIsLoading(true);
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
    fetchProductList();
  }, [query]);

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
        <Title onClickFilter={onClickFilter} />
        <Cards />
      </div>
    </>
  );
};
