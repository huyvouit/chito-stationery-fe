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
import { Pagination } from "../../Helper/pagination";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

export const ShopScreen = ({ onClickFilter }) => {
  const { query, handleQuery } = useContext(FilterContext);

  const [isLoading, setIsLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(0);
  const { productList, setProductList } = useContext(ProductContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchProductList = async () => {
      try {
        const params = query;
        const response = await productApi.getByFilter(params);
        setProductList(response.data.filteredProducts);
        setMaxPage(response.data.maxPage);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, [query]);

  const history = useHistory();
  const handlePageClick = (data) => {
    const params = { ...query, page: data.selected + 1 };
    history.push({
      pathname: "/shop",
      search: queryString.stringify(params),
    });
    handleQuery(params);
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
        <Title
          onClickFilter={onClickFilter}
          header={query.type?.length === 1 ? query.type : "ALL PRODUCTS"}
        />
        <Cards />
        <Pagination
          pageCount={maxPage}
          handleClick={handlePageClick}
          query={query}
        />
      </div>
    </>
  );
};
