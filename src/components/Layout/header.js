import React, { useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/Icons/user.svg";
import cartIcon from "../../assets/Icons/shopping-basket.svg";
import searchIcon from "../../assets/Icons/search-interface-symbol.svg";
import "../../style/Header/header.css";

export const Header = ({ onClickUser }) => {
  return (
    <header>
      <div className="navigation-bar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            CHITO STATIONERY
          </Link>
        </div>

        <ul className="navbar-right">
          <li className="nav-item">
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </li>
          <li className="navbar-icon">
            <Link to="/search" className="item-icon">
              <img
                className="image-icon"
                src={searchIcon}
                width="34px"
                height="34px"
                alt="React Logo"
              />
            </Link>
            <Link to="/cart" className="item-icon">
              <img
                className="image-icon"
                src={cartIcon}
                width="34px"
                height="34px"
                alt="React Logo"
              />
            </Link>
            <div className="item-icon">
              <img
                className="image-icon "
                src={userIcon}
                width="34px"
                height="34px"
                alt="user icon"
                onClick={onClickUser}
              />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
