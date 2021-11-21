import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/Icons/facebook.svg";
import Instagram from "../../assets/Icons/instagram.svg";
import "../../style/Footer/footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <p className="col-top ">shop</p>
          <div className="col-bottom">
            <div className="col-cate">
              <Link className="link-cate" to="/category/washi-tape">
                washi tape
              </Link>

              <Link className="link-cate" to="/category/washi-tape">
                sticker
              </Link>

              <Link className="link-cate" to="/category/washi-tape">
                sticky note
              </Link>

              <Link className="link-cate" to="/category/washi-tape">
                gift boxes
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <p className="col-top ">ABOUT</p>
          <div className="col-bottom">
            <div className="col-cate">
              <Link className="link-cate" to="/category/washi-tape">
                delivery + return
              </Link>

              <Link className="link-cate" to="/category/washi-tape">
                terms + conditions
              </Link>
              <Link className="link-cate" to="/category/washi-tape">
                privacy policy
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <p className="col-top">FOLLOW US</p>
          <div className="col-bottom">
            <div className="col-social">
              <Link to="/" className="item-icon">
                <img
                  className="image-icon"
                  src={Facebook}
                  width="15px"
                  height="15px"
                  alt="React Logo"
                />
              </Link>
              <Link to="/" className="item-icon">
                <img
                  className="image-icon"
                  src={Instagram}
                  width="15px"
                  height="15px"
                  alt="React Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
