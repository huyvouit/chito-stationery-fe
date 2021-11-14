import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import productApi from "../../api/product_api";
import { Loader } from "../Layout/loader";
import { ErrorPage } from "../Layout/error_page";
import rightIcon from "../../assets/Icons/right-arrow.svg";
import downIcon from "../../assets/Icons/down-arrow.svg";
import "../../style/Detail/Detail.css";
import { CartContext } from "../../contexts/cart_context";
import { useHistory } from "react-router-dom";

export const DetailScreen = () => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);
  const [infoProduct, setInfoProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [openProduct, setOpenProduct] = useState([]);
  const toggleProduct = () => setOpenProduct(!openProduct);

  const [openProduct1, setOpenProduct1] = useState([]);
  const toggleProduct1 = () => setOpenProduct1(!openProduct1);

  const [openProduct2, setOpenProduct2] = useState([]);
  const toggleProduct2 = () => setOpenProduct2(!openProduct2);

  const [count, setCount] = useState(1);

  function countSubClick() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function countPlusClick() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchProductById = async () => {
      try {
        const params = { id };
        const response = await productApi.getById(params);
        if (response.data) {
          setInfoProduct(response.data);

          await fetchRelatedProduct(response.data.type);
        }
      } catch (error) {
        console.log(error.response.data);
        console.log("Failed to fetch product list: ", error);
        setIsLoading(false);
      }
    };
    const fetchRelatedProduct = async (type) => {
      try {
        const params = { type: type };

        const response = await productApi.getByFilter(params);
        if (response.data) {
          setRelatedProduct(response.data.filteredProducts);
          setIsLoading(false);
        }
      } catch (error) {
        // console.log(error.response.data);
        // console.log("Failed to fetch product list: ", error);
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [id]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  let history = useHistory();
  const handleClickItemPassDetail = (item) => {
    history.push("/detail/" + item);
  };

  return isLoading ? (
    <Loader />
  ) : Object.keys(infoProduct).length === 0 ? (
    <ErrorPage />
  ) : (
    <>
      {infoProduct && Object.keys(infoProduct).length !== 0 && (
        <div className="detail">
          <div className="detail-contain">
            <div className="detail-img">
              <img src={infoProduct["image"]} alt="img-product" />
            </div>
            <div className="detail-contain-right">
              <h2>{infoProduct["productName"]}</h2>
              <p className="detail-contain-right-price">
                {infoProduct.price.$numberDecimal} VNĐ
              </p>

              <p className="labelQuantity">Quantity</p>
              <div className="detail-contain-right-quantity">
                <button onClick={countSubClick}>-</button>
                <p>{count}</p>
                <button onClick={countPlusClick}>+</button>
              </div>
              <div className="detail-contain-right-button">
                <button
                  className="add"
                  onClick={() => addItem(infoProduct, count, 0)}
                >
                  ADD TO CART
                </button>
                <button
                  className="buy"
                  onClick={() => {
                    addItem(infoProduct, count, 0);
                    history.push("/cart");
                  }}
                >
                  BUY NOW
                </button>
              </div>

              <div
                className="detail-contain-right-group"
                role="button"
                style={{
                  borderBottom: openProduct
                    ? "none"
                    : "1px solid var(--underline)",
                }}
                onClick={() => toggleProduct(!openProduct)}
              >
                <div className="detail-title-group">
                  <p>DESCRIPTION</p>
                </div>
                <div className="detail-icon">
                  <img
                    src={openProduct ? downIcon : rightIcon}
                    alt="Icon open and close"
                  />
                </div>
              </div>
              {openProduct && (
                <p className="detail-title-group-container">
                  {infoProduct["description"]}
                </p>
              )}

              <div
                className="detail-contain-right-group"
                role="button"
                style={{
                  borderBottom: openProduct1
                    ? "1px solid var(--underline)"
                    : "none",
                }}
                onClick={() => toggleProduct1(!openProduct1)}
              >
                <div className="detail-title-group">
                  <p>DETAIL</p>
                </div>
                <div className="detail-icon">
                  <img
                    src={openProduct1 ? rightIcon : downIcon}
                    alt="Icon open and close"
                  />
                </div>
              </div>
              {!openProduct1 && (
                <p className="detail-title-group-container">
                  {infoProduct["detail"]}
                </p>
              )}

              <div
                className="detail-contain-right-group"
                role="button"
                style={{
                  borderBottom: openProduct2
                    ? "1px solid var(--underline)"
                    : "none",
                }}
                onClick={() => toggleProduct2(!openProduct2)}
              >
                <div className="detail-title-group">
                  <p>CUSTOMER CARE</p>
                </div>
                <div className="detail-icon">
                  <img
                    src={openProduct2 ? rightIcon : downIcon}
                    alt="Icon open and close"
                  />
                </div>
              </div>
              {!openProduct2 && (
                <p className="detail-title-group-container">
                  Email <a href="mailto:">help@chitostationery.com</a> or call
                  0927272727
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="more-products">
        <h1 className="title-more-product">More Products</h1>

        <div className="detail-groupCard">
          {relatedProduct &&
            relatedProduct.length > 0 &&
            shuffle(relatedProduct)
              .slice(0, 4)
              .map((item) => {
                return (
                  <div
                    key={item._id}
                    className="detail-card-wrapper"
                    onClick={() => handleClickItemPassDetail(item._id)}
                  >
                    <div className="detail-card">
                      <img
                        className="detail-ItemImg"
                        src={item.image}
                        alt={item.productName}
                      />
                      <div className="detail-ItemTxt">
                        <h5>{item.productName}</h5>
                        <h6>{item.price.$numberDecimal} VND</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};
