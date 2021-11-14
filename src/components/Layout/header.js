import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/Icons/user.svg";
import cartIcon from "../../assets/Icons/shopping-basket.svg";
import searchIcon from "../../assets/Icons/search-interface-symbol.svg";
import stickerImg from "../../assets/Images/ava.jpg";
import "../../style/Header/header.css";
import { PopUpContext } from "../../contexts/popup_context";
import { AuthContext } from "../../contexts/auth_context";
import { CartContext } from "../../contexts/cart_context";
// import refreshPage from "../../Helper/refresh_page";
import { useHistory } from "react-router-dom";
export const Header = () => {
  const { setShowPopUp, setShowSearch } = useContext(PopUpContext);
  const { logoutUser } = useContext(AuthContext);
  const { state } = useContext(CartContext);
  // const handleClick = () => setClick(!click);
  let history = useHistory();
  const handleClickNavbar = (item) => {
    history.push(`/${item}`);
  };
  const {
    authState: { authLoading, isAuthenticated },
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
                    DELIVERY RETURNS
                  </Link>
                </li>
                <li>
                  <Link className="drop-link" to="/about/term-consition">
                    TERMS CONDITIONS
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
                {state.totalItems !== 0 && (
                  <span className="btn-number-cart-item">{state.totalItems}</span>
                )}
              </Link>
              <div className="dropdown-menu cart">
                <div className="hover-flex">
                  <div className="sub-hover-flex">
                    <img className="img-hover" src={stickerImg} alt="productImg"/>
                    <div>Minimalist Washi Tape Set 2</div>
                  </div>
                  <div>₫80,000</div>
                </div>
                <div className="hover-flex">
                  <div className="sub-hover-flex">
                    <img className="img-hover" src={stickerImg} alt="productImg"/>
                    <div>Minimalist Washi Tape Set 2</div>
                  </div>
                  <div>₫80,000</div>
                </div>
              </div>
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
