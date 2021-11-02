import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productApi from "../../api/product_api";
import { Loader } from "../Layout/loader";
import ErrorImage from "../../assets/Icons/404_Error.svg";
import { Link } from "react-router-dom";
export const DetailScreen = () => {
  const { id } = useParams();
  const [infoProduct, setInfoProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchProductById = async () => {
      try {
        const params = { id };
        const response = await productApi.getById(params);
        setInfoProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductById();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : infoProduct && Object.keys(infoProduct) === 0 ? (
    <div className="error">
      <img className="error_image" src={ErrorImage} alt="404 error" />
      <h2 className="error_msg">Uh oh! Looks like you got lost.</h2>
      <Link to="/" className="error_btn">
        BACK TO HOME
      </Link>
    </div>
  ) : (
    <>
      {infoProduct && Object.keys(infoProduct) !== 0 && (
        <div>
          {infoProduct["_id"]} {infoProduct["productName"]}
        </div>
      )}
    </>
  );
};
