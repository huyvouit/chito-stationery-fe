import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/Icons/facebook.svg";
import Instagram from "../../assets/Icons/instagram.svg";
import { FilterContext } from "../../contexts/filter_context";
import "../../style/Footer/footer.css";
export const Footer = () => {
  const { handleQuery } = useContext(FilterContext);
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <p className="col-top ">shop</p>
          <div className="col-bottom">
            <div className="col-cate">
              <Link
                className="link-cate"
                to="/shop?type=washi%20tape"
                onClick={() => {
                  handleQuery({ type: ["washi tape"] });
                }}
              >
                washi tape
              </Link>

              <Link
                className="link-cate"
                to="/shop?type=sticker"
                onClick={() => {
                  handleQuery({ type: ["sticker"] });
                }}
              >
                sticker
              </Link>

              <Link
                className="link-cate"
                to="/shop?type=sticky%20note"
                onClick={() => {
                  handleQuery({ type: ["sticky note"] });
                }}
              >
                sticky note
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <p className="col-top ">ABOUT</p>
          <div className="col-bottom">
            <div className="col-cate">
              <Link className="link-cate" to="/about">
                delivery &amp; returns
              </Link>

              <Link className="link-cate" to="/about/term-consition">
                terms &amp; conditions
              </Link>
              <Link className="link-cate" to="/about/privacy-policy">
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
