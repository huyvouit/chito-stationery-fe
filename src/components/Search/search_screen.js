import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Cards from "../Shop_Nav/Cards";
import { FilterContext } from "../../contexts/filter_context";
import productApi from "../../api/product_api";
import { Loader } from "../Layout/loader";
import "../../style/Search/search_screen.css";
import { ProductContext } from "../../contexts/product_context";
import searchIcon from "../../assets/Icons/search-interface-symbol.svg";

export const SearchScreen = () => {
  const { query, handleQuery } = useContext(FilterContext);
  const [isLoading, setIsLoading] = useState(true);
  const { productList, setProductList } = useContext(ProductContext);
  const [searchInput, setSearchInput] = useState(query.q || "");

  useEffect(() => {
    setIsLoading(true);
    const fetchProductList = async () => {
      try {
        const params = query;
        const response = await productApi.getBySearch(params);

        setProductList(response.data.searchedProducts);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, [query]);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };
  console.log(searchInput);
  const history = useHistory();
  const handleKeyDown = (e) => {
    const value = {
      q: e.target.value,
    };
    if (e.key === "Enter") {
      handleQuery(value);
      history.push({
        pathname: "/search",
        search: queryString.stringify(value),
      });
    }
  };

  // const handleLookUp = (name) => {
  //   console.log(name);
  //   const value = {
  //     q: name || [],
  //   };
  //   handleQuery(value);
  //   history.push({
  //     pathname: "/search",
  //     search: queryString.stringify(value),
  //   });
  // };

  return isLoading ? (
    <Loader />
  ) : productList.length === 0 ? (
    <div className="search-main-area">
      <div className="search-text">
        <div className="search-input">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
        {/* <img
          className="image-icon"
          src={searchIcon}
          width="20px"
          height="20px"
          alt="search icon"
          onClick={ handleLookUp}
        /> */}
      </div>
      <div className="search-result">
        <p>No found product</p>
      </div>
    </div>
  ) : (
    <div className="search-main-area">
      <div className="search-text">
        <div className="search-input">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
        {/* <img
          className="image-icon"
          src={searchIcon}
          width="20px"
          height="20px"
          alt="search icon"
          onClick={handleLookUp}
        /> */}
      </div>
      <div className="search-result">
        <Cards productList={productList} />
      </div>
    </div>
  );
};
