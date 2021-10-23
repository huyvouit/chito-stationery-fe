import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Title from "./title";
import "../../style/Shop/Shop_screen.css";
import productApi from "../../api/product_api";
import { Loader } from "../Layout/loader";
export const ShopScreen = ({ onClickFilter }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("useEfect");

    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await productApi.getAll();
      console.log(productList);
      console.log(response.data.products);
      setProductList(response.data.products);
      console.log(productList);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  return productList.length === 0 ? (
    <Loader />
  ) : (
    <>
      <div className="ShopScreen">
        <Title onClickFilter={ onClickFilter } head="ALL PRODUCT" item={productList.length} />
        <Cards productList={productList} />
      </div>
    </>
  );
};
