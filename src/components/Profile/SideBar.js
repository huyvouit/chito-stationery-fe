import React from "react";
import { Link } from "react-router-dom";

export const SideBar = (props) => {
  const path = props.location.pathname;
  console.log(path);
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-title-container">
        <li>
          <Link
            to="/profile"
            className={
              path === "/profile"
                ? "sidebar-title sidebar-active"
                : "sidebar-title"
            }
          >
            My Account
          </Link>
        </li>
        <li>
          <Link
            to="/profile/acc-info"
            className={
              path === "/profile/acc-info"
                ? "sidebar-title sidebar-active"
                : "sidebar-title"
            }
          >
            Account Information
          </Link>
        </li>
        <li>
          <Link
            to="/profile/acc-address"
            className={
              path === "/profile/acc-address"
                ? "sidebar-title sidebar-active"
                : "sidebar-title"
            }
          >
            Address Book
          </Link>
        </li>
        <li>
          <Link
            to="/profile/acc-orders"
            className={
              path === "/profile/acc-orders"
                ? "sidebar-title sidebar-active"
                : "sidebar-title"
            }
          >
            My Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};
