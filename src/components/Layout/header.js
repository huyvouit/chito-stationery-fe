import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/Icons/user.svg";
import cartIcon from "../../assets/Icons/shopping-basket.svg";
import searchIcon from "../../assets/Icons/search-interface-symbol.svg";
import "../../style/Header/header.css";
import { PopUpContext } from "../../contexts/popup_context";
// import DropDown from "../Shop_Dropdown/DropDown";
import { AuthContext } from "../../contexts/auth_context";
// import refreshPage from "../../Helper/refresh_page";
export const Header = () => {
  const { setShowPopUp, setShowSearch } = useContext(PopUpContext);
  // const [click, setClick] = useState(false);
  // // const [dropDown, setDropdown]

  // const handleClick = () => setClick(!click);

  const {
    authState: {
      authLoading,
      isAuthenticated,
      user: { username },
    },
  } = useContext(AuthContext);
  // console.log(authLoading, isAuthenticated);
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
            <div className="item-icon">
              <img
                className="image-icon"
                src={searchIcon}
                width="20px"
                height="20px"
                alt="search icon"
                onClick={() => setShowSearch(true)}
              />
            </div>
            <Link to="/cart" className="item-icon">
              <img
                className="image-icon"
                src={cartIcon}
                width="20px"
                height="20px"
                alt="cart icon"
              />
            </Link>
            {!authLoading && isAuthenticated ? (
              <div className="item-icon">
                <div className="avatar-user">{username}</div>
              </div>
            ) : (
              <div className="item-icon">
                <img
                  className="image-icon "
                  src={userIcon}
                  width="20px"
                  height="20px"
                  alt="user icon"
                  onClick={() => setShowPopUp(true)}
                />
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};
