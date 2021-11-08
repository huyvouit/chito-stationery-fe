import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/Icons/right-arrow.svg";
import imgProduct from "../../assets/Images/candy.jpg";

export const Checkout = () => {
  return (
    <div className="checkout-wrapper">
      <div className="checkout-left">
        <div className="checkout-header">
          <h1 className="checkout-title">CHECKOUT</h1>
          <Link className="checkout-link" to="/shop">
            KEEP SHOPPING
            <img className="checkout-arrow-icon" src={arrow} alt="arrow"></img>
          </Link>
        </div>
        <div className="checkout-view-cart">
          <div className="checkout-cart-info">
            <div className="checkout-cart-info-style">
              <h3>84.000 VND</h3>
              <h5>(2 ITEMS)</h5>
            </div>
            <div className="checkout-cart-info-style">
              <h5>Close Cart</h5>
              <button className="checkout-cart-info-btn">-</button>
            </div>
          </div>
          <table className="checkout-cart">
            <colgroup>
              <col style={{ width: "21%" }}></col>
              <col style={{ width: "50%" }}></col>
              <col style={{ width: "18%" }}></col>
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <img
                    className="detail-img"
                    src={imgProduct}
                    alt="detail"
                  ></img>
                </td>
                <td>
                  <h4 className="detail-name">CANDY STICKERS </h4>
                  <p>Quantity: 1</p>
                </td>
                <td>590.000 VND</td>
              </tr>
              <tr>
                <td>
                  <img
                    className="detail-img"
                    src={imgProduct}
                    alt="detail"
                  ></img>
                </td>
                <td>
                  <h4 className="detail-name">CANDY STICKERS </h4>
                  <p>Quantity: 1</p>
                </td>
                <td>590.000 VND</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="checkout-info-wrapper">
          <div className="checkout-info-title">
            <h3>1. Contact Information</h3>
            <button className="checkout-btn checkout-info-title-btn">
              EDIT
            </button>
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">EMAIL*</div>
            <input type="email" className="checkout-info-input" />
          </div>
          <div className="checkout-btn-continue">
            <button className="checkout-btn checkout-info-content-btn">
              CONTINUE
            </button>
          </div>
        </div>
        <div className="checkout-info-wrapper">
          <div className="checkout-info-title">
            <h3>2. Shipping</h3>
            <button className="checkout-btn checkout-info-title-btn">
              EDIT
            </button>
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">FULL NAME*</div>
            <input type="email" className="checkout-info-input" />
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">PHONE NUMBER*</div>
            <input type="number" className="checkout-info-input" />
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">DISTRICT*</div>
            <input type="text" className="checkout-info-input" />
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">PROVINCE/CITY*</div>
            <input type="text" className="checkout-info-input" />
          </div>
          <div className="checkout-btn-continue">
            <button className="checkout-btn checkout-info-content-btn">
              CONTINUE
            </button>
          </div>
        </div>
        <div className="checkout-info-payment">
          <h3>3. Payment</h3>
          <div className="checkout-group-button">
            <label className="container">
              Cash on Delivery (COD)
              <input type="radio" name="radio" checked="checked" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              VISA
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Momo E-Wallet
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <div className="checkout-summary">
          <div className="checkout-summary-title">ORDER SUMMARY</div>
          <div className="checkout-summary-content">
            <div className="checkout-right-flex checkout-more-space">
              <div>Subtotal</div>
              <div>84.000 VND</div>
            </div>
            <div className="checkout-right-flex">
              <div>Shipping</div>
              <div>0 VND</div>
            </div>
          </div>
          <div className="checkout-right-flex">
            <div>ORDER TOTAL</div>
            <div>84.000 VND</div>
          </div>
        </div>
        <div className="checkout-btn-continue">
          <Link
            to="/after-checkout"
            className="checkout-btn-bigger checkout-info-content-btn"
          >
            ORDER
          </Link>
        </div>
      </div>
    </div>
  );
};
