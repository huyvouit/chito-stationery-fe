import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";
import userApi from "../../api/user_api";
import { formatter } from "../../Helper/formatter";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
// import { normalizeUnits } from "moment";
// import arrowUpTitle from "../../assets/Icons/arrow-up-title.svg";
// import arrowDownTitle from "../../assets/Icons/arrow-down-title.svg";

export const ProfileScreen = () => {
  const {
    authState: { authLoading, user },
  } = useContext(AuthContext);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchPurchaseHistory = async () => {
      try {
        const param = { email: user.email };
        const response = await userApi.getPurchaseHistory(param);
        setPurchaseHistory(response.data.orders);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchPurchaseHistory();
  }, []);

  useEffect(() => {
    const resWidth = () => {
      if (document.body.clientWidth > 575) {
        setShowSidebar(false);
      }
    };
    window.addEventListener("resize", resWidth);
    resWidth();
    return () => window.removeEventListener("resize", resWidth);
  }, []);

  let history = useHistory();
  const handleRoute = (endpoint) => {
    history.push(endpoint);
  };

  const dropdownSidebar = () => setShowSidebar(!showSidebar);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="right-col-center">
      <div className="profile-content-right">
        <div className="profile-info">
          <div className="profile-col-width">
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => handleRoute("/profile/acc-info")}
            >
              Account Information
            </h2>
            <h5 className="profile-info-subtitle">CONTACT INFORMATION</h5>
            <p>{user.fullname}</p>
            <p>{user.email}</p>
          </div>
          <div className="profile-col-width">
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => handleRoute("/profile/acc-address")}
            >
              Address Book
            </h2>
            <h5 className="profile-info-subtitle">DEFAULT SHIPPING ADDRESS</h5>
            {user.fullname && <p>{user.fullname}</p>}
            {user.phone && <p>{user.phone}</p>}
            {user.address && <p>{user.address}</p>}
          </div>
        </div>
        <div className="profile-order">
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => handleRoute("/profile/acc-orders")}
          >
            My Orders
          </h2>
          {purchaseHistory && purchaseHistory.length === 0 ? (
            <p>You have purchased no orders.</p>
          ) : (
            <table className="table-profile">
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
                {[...purchaseHistory].slice(0, 4).map((item) => {
                  return (
                    <tr key={item._id}>
                      <td className="ellipsis">
                        <span>#{item._id}</span>
                      </td>
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
      </div>
    </div>
  );
};
