import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/Icons/user.svg";
import cartIcon from "../../assets/Icons/shopping-basket.svg";
import searchIcon from "../../assets/Icons/search-interface-symbol.svg";
import { formatter } from "../../Helper/formatter";
import "../../style/Header/header.css";
import { PopUpContext } from "../../contexts/popup_context";
import { AuthContext } from "../../contexts/auth_context";
import { CartContext } from "../../contexts/cart_context";
// import refreshPage from "../../Helper/refresh_page";
import { useHistory } from "react-router-dom";
export const Header = () => {
  const { setShowPopUp, setShowSearch } = useContext(PopUpContext);
  const { logoutUser } = useContext(AuthContext);
  const {
    state: { cartItems, totalItems },
  } = useContext(CartContext);

  let history = useHistory();
  const handleClickNavbar = (item) => {
    history.push(`/${item}`);
  };

  const handleClickItemPassDetail = (item) => {
    history.push("/detail/" + item);
  };

  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  return (
    <header>
      <div className="navigation-bar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            CHITO STATIONERY
          </Link>
        </div>

        <ul className="navbar-right">
          <li className="hover-menu nav-item">
            <div className="nav-link">
              <p onClick={() => handleClickNavbar("shop")}>SHOP</p>
              <ul className="dropdown-menu shop">
                <li>
                  <Link to="/shop?type=washi%20tape" className="drop-link">
                    WASHI TAPE
                  </Link>
                </li>
                <li>
                  <Link to="/shop?type=sticker" className="drop-link">
                    STICKER
                  </Link>
                </li>
                <li>
                  <Link to="/shop?type=sticky%20note" className="drop-link">
                    STICKY NOTE
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover-menu nav-item">
            <div className="nav-link">
              <p onClick={() => handleClickNavbar("about")}>ABOUT</p>
              <ul className="dropdown-menu about">
                <li>
                  <Link className="drop-link" to="/about">
                    DELIVERY &amp; RETURNS
                  </Link>
                </li>
                <li>
                  <Link className="drop-link" to="/about/term-consition">
                    TERMS &amp; CONDITIONS
                  </Link>
                </li>
                <li>
                  <Link className="drop-link" to="/about/privacy-policy">
                    PRIVACY POLICY
                  </Link>
                </li>
              </ul>
            </div>
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
            <div className="item-icon hover-menu">
              <Link to="/cart">
                <img
                  className="image-icon"
                  src={cartIcon}
                  width="20px"
                  height="20px"
                  alt="cart icon"
                />
                {totalItems !== 0 && (
                  <span className="btn-number-cart-item">{totalItems}</span>
                )}
              </Link>
              {totalItems > 0 && (
                <div className="dropdown-menu cart">
                  {cartItems &&
                    cartItems.length > 0 &&
                    cartItems.slice(0, 3).map((item) => {
                      return (
                        <div
                          key={item._id}
                          className="hover-flex"
                          title={item.productName}
                          onClick={() => handleClickItemPassDetail(item._id)}
                        >
                          <div className="sub-hover-flex">
                            <img
                              className="img-hover"
                              src={item.image}
                              alt={item.productName}
                            />
                            <div className="cart-hover-info">
                              <p>{item.productName}</p>
                              <p>Quantity: {item.quantity}</p>
                            </div>
                          </div>
                          <div>{formatter.format(item.totalPriceByItem)}</div>
                        </div>
                      );
                    })}
                  <div className="cart-hover-footer">
                    {totalItems > 3 ? (
                      <div className="cart-hover-more">
                        More {totalItems - 3} item(s)
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <Link to="/cart" className="cart-hover-btn">
                      SEE CART
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {!authLoading && isAuthenticated ? (
              <div className="item-icon hover-user">
                <div className="avatar-user"></div>
                <ul className="dropdown-menu icon">
                  <li>
                    <Link to="/profile" className="drop-link">
                      PROFILE
                    </Link>
                  </li>
                  <li>
                    <div className="drop-link" onClick={logoutUser}>
                      SIGN OUT
                    </div>
                  </li>
                </ul>
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
