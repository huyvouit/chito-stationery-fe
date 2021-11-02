import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productApi from "../../api/product_api";
import { Loader } from "../Layout/loader";
import ErrorImage from "../../assets/Icons/404_Error.svg";
import { Link } from "react-router-dom";
import { ErrorPage } from "../Layout/error_page";
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
        <div>
          {infoProduct["_id"]} {infoProduct["productName"]}
        </div>
      )}
    </>
  );
};
