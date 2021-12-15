import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = (props) => {
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-title-container">
        <li>
          <NavLink
            to="/profile"
            exact={true}
            className="sidebar-title"
            activeClassName="sidebar-active"
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/acc-info"
            className="sidebar-title"
            activeClassName="sidebar-active"
          >
            Account Information
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/acc-address"
            className="sidebar-title"
            activeClassName="sidebar-active"
          >
            Address Book
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/acc-orders"
            className="sidebar-title"
            activeClassName="sidebar-active"
          >
            My Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
