import React, { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { ErrorPage } from "../Layout/error_page";
import { useParams } from "react-router";
import userApi from "../../api/user_api";
import { formatter } from "../../Helper/formatter";
import { Loader } from "../Layout/loader";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export const DetailOrder = () => {
  const { id } = useParams();
  const [detailOrder, setDetailOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchDetailOrderById = async () => {
      try {
        const params = { id };
        const response = await userApi.getPurchaseHistoryById(params);

        if (response.data) {
          setDetailOrder(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        // console.log(error.response);
        // console.log("Failed to fetch product list: ", error);
        setIsLoading(false);
      }
    };
    fetchDetailOrderById();
  }, [id]);

  return Object.keys(detailOrder).length === 0 ? (
    <p>Loading...</p>
  ) : (
    <div className="detail-order-container">
      <div className="detail-order-top">
        <h3 className="ellipsis">
          <span>ID: #{detailOrder["_id"]}</span>
        </h3>
        <h3>
          Date: <Moment format="DD/MM/YYYY">{detailOrder["createdAt"]}</Moment>
        </h3>
      </div>
      <table className="table-detail-profile table-width">
        <colgroup>
          <col style={{ width: "18%" }}></col>
          <col style={{ width: "62%" }}></col>
          <col style={{ width: "18%" }}></col>
        </colgroup>
        <tbody>
          {detailOrder &&
            Object.keys(detailOrder).length !== 0 &&
            detailOrder["productList"].map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img
                      className="detail-img"
                      src={item["image"]}
                      alt={item["productName"]}
                    ></img>
                  </td>
                  <td>
                    <h4 className="detail-name">{item["productName"]} </h4>
                    <p>Quantity: {item["quantity"]}</p>
                  </td>
                  <td>
                    {formatter.format(item.totalPriceByItem.$numberDecimal)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="detail-order-bottom">
        <div className="detail-order-content-top">
          <div className="detail-order-title">Shipping Address</div>
          <div className="detail-order-content">
            {detailOrder["customerName"]}
          </div>
          <div className="detail-order-content">
            {detailOrder["customerPhone"]}
          </div>
          <div className="detail-order-content">
            {detailOrder["customerAddress"]}
          </div>
        </div>
        <div className="detail-order-title">
          Total: {formatter.format(detailOrder["totalCost"].$numberDecimal)}
        </div>
      </div>
      <div>
        <Link to="/profile/acc-orders" className="detail-order-bottom-btn">
          BACK
        </Link>
      </div>
    </div>
  );
};
