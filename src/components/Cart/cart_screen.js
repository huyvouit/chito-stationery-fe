import React from "react";
import "../../style/Cart/cart_screen.css";
import ProductImg from "../../assets/Images/candy.jpg" ;
import { Link } from "react-router-dom";

export const CartScreen = () => {
  return (
    <>
        <div className="cart_wrapper">
          <h1 className="cart_title">SHOPPING CART</h1>
          <div className="cart_tab">
            <h4>Product</h4>
            <div className="cart_right">
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
          </div>
          <div className="cart_product">
              <img className="cart_product_image" src={ProductImg} alt="product image" />
              <div className="cart_product_info">
                <div className="cart_tab_2">
                  <p className="cart_product_info_name">CANDY STICKERS</p>
                </div>
                <p className="cart_product_info_remove">Remove</p>
              </div>
              <div className="cart_right_2">
                <h4>24.000 VND</h4>
                <div className="product_incr_decr">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <h4>24.000 VND</h4>
              </div>
          </div>
          <div className="cart_product">
              <img className="cart_product_image" src={ProductImg} alt="product image" />
              <div className="cart_product_info">
                <div className="cart_tab_2">
                  <p className="cart_product_info_name">CANDY STICKERS</p>
                </div>
                <p className="cart_product_info_remove">Remove</p>
              </div>
              <div className="cart_right_2">
                <h4>24.000 VND</h4>
                <div className="product_incr_decr">
                  <button>-</button>
                  <p>2</p>
                  <button>+</button>
                </div>
                <h4>48.000 VND</h4>
              </div>
          </div>
          <div className="cart_note">
            <h4>NOTES</h4>
            <h4>84.000 VND</h4>
          </div>
          <div className="cart_note_area">
            <textarea type="text" placeholder="Please include any special requests here regarding the items in your order. If you are sending a gift, please include your personal message here." />
            <div className="cart_note_area_right">
              <h4>SHIPPING CALCULATED AT CHECKOUT</h4>
              <Link to="/" className="error_btn">
                CHECKOUT
              </Link>
            </div>
          </div>
          
        </div>
    </>
  );
};
