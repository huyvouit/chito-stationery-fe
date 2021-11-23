import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";
import userApi from "../../api/user_api";
import { formatter } from "../../Helper/formatter";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
export const MyOrders = () => {
  const {
    authState: { authLoading, user },
  } = useContext(AuthContext);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let history = useHistory();
  const handleClickItemPassDetail = (item) => {
    history.push("/profile/acc-orders/" + item);
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchPurchaseHistory = async () => {
      try {
        const param = { email: user.email };
        const response = await userApi.getPurchaseHistory(param);
        setPurchaseHistory(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchPurchaseHistory();
  }, []);

  return (
    <div className="my-order-container">
      <h2>My Orders</h2>
      {purchaseHistory && purchaseHistory.length === 0 ? (
        <p>You have purchased no orders.</p>
      ) : (
        <table className="table-profile table-width">
          <colgroup>
            <col style={{ width: "10%" }}></col>
            <col style={{ width: "50%" }}></col>
            <col style={{ width: "10%" }}></col>
            <col style={{ width: "30%" }}></col>
          </colgroup>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {[...purchaseHistory].reverse().map((item) => {
              return (
                <tr
                  key={item._id}
                  onClick={() => handleClickItemPassDetail(item._id)}
                  className="detail-order-tr"
                  style={{ cursor: "pointer" }}
                >
                  <td className="ellipsis"><span>#{item._id}</span></td>
                  <td>
                    <Moment format="DD/MM/YYYY">{item.createdAt}</Moment>
                  </td>
                  <td>{item.productList.length}</td>
                  <td>{formatter.format(item.totalCost.$numberDecimal)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
