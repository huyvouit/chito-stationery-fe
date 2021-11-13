import React from "react";
import ava from "../../assets/Images/ava.jpg";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <img className="sidebar-img" src={ava} alt="avatar"></img>
      <ul className="sidebar-title-container">
        <li>
          <Link to="/profile" className="sidebar-title">
            My Account
          </Link>
        </li>
        <li>
          <Link to="/profile/acc-info" className="sidebar-title">
            Account Information
          </Link>
        </li>
        <li>
          <Link to="/profile/acc-address" className="sidebar-title">
            Address Book
          </Link>
        </li>
        <li>
          <Link to="/profile/acc-orders" className="sidebar-title">
            My Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};
