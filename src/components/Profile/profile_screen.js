import React, { useContext } from "react";
import { SideBar } from "./SideBar";
import "./profile.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";

export const ProfileScreen = () => {
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);
  return (
    <>
      {authLoading ? (
        <Loader />
      ) : (
        <div className="profile-wrapper">
          <h1 className="profile-title">MY ACCOUNT</h1>
          <div className="profile-content">
            <SideBar />
            <div className="profile-content-right">
              <div className="profile-info">
                <div className="profile-col-width">
                  <h2>Account Information</h2>
                  <h5 className="profile-info-subtitle">CONTACT INFORMATION</h5>
                  <p>{user.fullname}</p>
                  <p>{user.email}</p>
                  <div className="btn-container">
                    <Link
                      to={{
                        pathname: "/profile/acc-info",
                        state: { isChangePass: true },
                      }}
                      className="profile-info-btn"
                    >
                      CHANGE PASSWORD
                    </Link>
                  </div>
                </div>
                <div className="profile-col-width">
                  <h2>Address Book</h2>
                  <h5 className="profile-info-subtitle">
                    DEFAULT SHIPPING ADDRESS
                  </h5>
                  {user.fullname && <p>{user.fullname}</p>}
                  {user.phone && <p>{user.phone}</p>}
                  {user.address && <p>{user.address}</p>}
                  <div className="btn-container">
                    <Link
                      to="/profile/acc-address/edit-address"
                      className="profile-info-btn"
                    >
                      EDIT ADDRESS
                    </Link>
                  </div>
                </div>
              </div>
              <div className="profile-order">
                <h2>My Orders</h2>
                <table className="table-profile">
                  <colgroup>
                    <col style={{ width: "10%" }}></col>
                    <col style={{ width: "50%" }}></col>
                    <col style={{ width: "10%" }}></col>
                    <col style={{ width: "30%" }}></col>
                  </colgroup>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                  <tr>
                    <td>#0001</td>
                    <td>27/10/2021</td>
                    <td>5</td>
                    <td>590.000 VND</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
