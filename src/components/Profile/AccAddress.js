import React, { useContext } from "react";
import { SideBar } from "./SideBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";

export const AccAddress = () => {
  const {
    authState: { authLoading, user },
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
            <div>
              <h2>Default Shipping Address</h2>
              <div className="profile-info-subtitle">
                {user.fullname && <p>{user.fullname}</p>}
                {user.phone && <p>{user.phone}</p>}
                {user.address && <p>{user.address}</p>}
              </div>
              <div className="btn-container">
                <Link
                  to="/profile/acc-address/edit-address"
                  className="profile-info-btn"
                >
                  CHANGE SHIPPING ADDRESS
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
