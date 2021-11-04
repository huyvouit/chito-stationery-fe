import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productApi from "../../api/product_api";
import { Loader } from "../Layout/loader";
import ErrorImage from "../../assets/Icons/404_Error.svg";
import { Link } from "react-router-dom";
import { ErrorPage } from "../Layout/error_page";
import rightIcon from "../../assets/Icons/right-arrow.svg";
import downIcon from "../../assets/Icons/down-arrow.svg";
import "./Detail.css";
import Cards from "../Shop_Nav/Cards";
export const DetailScreen = () => {
  const { id } = useParams();
  const [infoProduct, setInfoProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [openProduct, setOpenProduct] = useState([]);
  const toggleProduct = () => setOpenProduct(!openProduct);

  const [openProduct1, setOpenProduct1] = useState([]);
  const toggleProduct1 = () => setOpenProduct1(!openProduct1);

  const [openProduct2, setOpenProduct2] = useState([]);
  const toggleProduct2 = () => setOpenProduct2(!openProduct2);


  useEffect(() => {
    setIsLoading(true);
    const fetchProductById = async () => {
      try {
        const params = { id };
        const response = await productApi.getById(params);
        if (response.data) {
          setInfoProduct(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.response.data);
        console.log("Failed to fetch product list: ", error);
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [id]);
  console.log(infoProduct);
  return isLoading ? (
    <Loader />
  ) : Object.keys(infoProduct).length === 0 ? (
    <ErrorPage />
  ) : (
    <>
      {infoProduct && Object.keys(infoProduct).length !== 0 && (
        <div className="detail">
          <div className="detail-contain">
            <div className="detail-img" >
              <img src={infoProduct["image"]} alt="image product" />
            </div>
            <div className="detail-contain-right">
              <h2>{infoProduct["productName"]}</h2>
              <p className="detail-contain-right-price">{infoProduct.price.$numberDecimal} VNĐ</p>
              <div className="detail-contain-right-quantity">
                <button>
                  -
                </button>
                <p>1</p>
                <button >+</button>
              </div>
              <div className="detail-contain-right-button">
                <button className="add">ADD TO CART</button>
                <button className="buy">BUY NOW</button>
              </div>



              <div
                className="detail-contain-right-group"
                role="button"
                style={{
                  borderBottom: openProduct ? "1px solid var(--underline)" : "none",
                }}
                onClick={() => toggleProduct(!openProduct)}
              >
                <div className="detail-title-group">
                  <p>DESCRIPTION</p>
                </div>
                <div className="detail-icon">
                  <img
                    src={openProduct ? rightIcon : downIcon}
                    alt="Icon open and close"
                  />
                </div>
              </div>
              {!openProduct && (

                <p className="detail-title-group-container">{infoProduct["description"]}</p>
              )}



              <div
                className="detail-contain-right-group"
                role="button"
                style={{
                  borderBottom: openProduct1 ? "1px solid var(--underline)" : "none",
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

                <p className="detail-title-group-container">{infoProduct["detail"]}</p>
              )}



              <div
                className="detail-contain-right-group"
                role="button"
                style={{
                  borderBottom: openProduct2 ? "1px solid var(--underline)" : "none",
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

                <p className="detail-title-group-container">Email help@chitostationery.com or call 0927272727</p>
              )}


            </div>
          </div>
        </div>
      )}

      <div className="more-products">
          <h1 className="title-more-product">More Products</h1>
          {/* <Cards productList={productList} /> */}
          <div  className="detail-groupCard">
                <div className="detail-card-wrapper">
                  <div
                    className="detail-card"
                  >
                    <img className="detail-ItemImg" src="" alt="Avatar" />
                    <div className="detail-ItemTxt">
                      <h5></h5>
                      <p></p>
                      <h6> VND</h6>
                    </div>
                  </div>
                  <div className="detail-card_btn " >
                    ADD TO CART
                  </div>
                </div>
              </div>
      </div>
    </>
  );
};
