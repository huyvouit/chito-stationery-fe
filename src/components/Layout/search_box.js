import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
//context
import { PopUpContext } from "../../contexts/popup_context";
import { FilterContext } from "../../contexts/filter_context";
//css
import "../../style/Layout/search_box.css";
import iconClose from "../../assets/Icons/cancel.svg";
//component
import productApi from "../../api/product_api";

export const SearchBox = () => {
  const { showSearch, closePopUp } = useContext(PopUpContext);
  const { handleQuery } = useContext(FilterContext);
  // state lưu các input search
  const [searchSubmit, setSearchSubmit] = useState("");
  const [searchInput, setSearchInput] = useState("");
  //ds sản phẩm trả về
  const [productSearch, setProductSearch] = useState([]);
  const debounce = useRef(null);

  useEffect(() => {
    console.log("useEfect search");
    const fetchProductBySearch = async () => {
      try {
        const param = {
          q: [searchSubmit],
        };

        const response = await productApi.getBySearch(param);
        // console.log(response.data.searchedProducts);
        setProductSearch(response.data.searchedProducts);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductBySearch();
    return () => {
      setSearchSubmit("");
    };
  }, [searchSubmit]);

  //function handle input search
  const history = useHistory();
  const handleKeyDown = (e) => {
    const value = {
      q: e.target.value,
    };
    if (e.key === "Enter") {
      closePopUp();
      handleQuery(value);
      history.push({
        pathname: "/search",
        search: queryString.stringify(value),
      });
    }
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (debounce.current) {
      // console.log("clear");
      clearTimeout(debounce.current);
    }
    debounce.current = setTimeout(() => {
      setSearchSubmit(value);
    }, 900);
  };

  return (
    <div
      className="search-box"
      style={{
        // transform: showSearch
        //   ? "translate(-50%, 0vh)"
        //   : "translate(-50%,-1000px)",
        opacity: showSearch ? "1" : "0",
        zIndex: showSearch ? "99" : "-1",
      }}
    >
      <div className="search-main">
        <div className="search-text">
          <div className="icon-close-search">
            <img
              className="image-icon"
              src={iconClose}
              width="20px"
              height="20px"
              alt="cart icon"
              onClick={closePopUp}
            />
          </div>
          <div className="search-input">
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInput}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
        <div className="search-result">
          <div className="show-product-field">
            {productSearch.length > 0 ? (
              productSearch.slice(0, 4).map((item) => (
                <div key={item._id} className="product-index">
                  <div className="product-image">
                    <img className="item-image" src={item.image} alt="Avatar" />
                  </div>
                  <div className="product-info">
                    <h4 className="info-name">{item.productName}</h4>
                    <p className="info-desc">{item.description}</p>
                    <p className="info-price">{item.price.$numberDecimal}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>What are you looking for?</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
