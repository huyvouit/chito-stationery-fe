import React, { useContext } from "react";
import "../../style/Cart/cart_screen.css";
import cartIcon from "../../assets/Icons/shopping-basket.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart_context";

export const CartScreen = () => {
  const {
    state: { cartItems, totalPrice, totalItems },
    addItem,
    removeItem,
    removeItemWithQuantity,
  } = useContext(CartContext);
  console.log(totalItems);
  const calculateTotalPriceByItem = (item) => {
    return item.price.$numberDecimal * item.quantity;
  };
  return (
    <>
      {totalItems === 0 ? (
        <div className="cart-empty">
          <img className="cart-empty-image" src={cartIcon} alt="404 error" />
          <h2 className="cart-empty-msg">
            Your cart is empty! Please select products you wanna buy.
          </h2>
          <Link to="/shop" className="cart-empty-btn">
            BUY NOW
          </Link>
        </div>
      ) : (
        <div className="cart_wrapper">
          <h1 className="cart_title">SHOPPING CART</h1>
          <table className="cart-table">
            <colgroup>
              <col style={{ width: "auto" }}></col>
              <col style={{ width: "15%" }}></col>
              <col style={{ width: "30%" }}></col>
              <col style={{ width: "15%" }}></col>
            </colgroup>
            <tr className="cart-table-header">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>

            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => {
                return (
                  <tbody>
                    <tr key={item._id} className="cart-table-body">
                      <td>
                        <div className="cart-table-body-product">
                          <img
                            src={item.image}
                            alt="product"
                            className="cart-table-body-product-image"
                          />
                          <div className="cart-table-body-product-content">
                            <p className="cart-table-body-product-content-name">
                              {item.productName}
                            </p>
                            <p
                              className="cart-table-body-product-content-remove"
                              onClick={() => removeItem(item)}
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <h4>{item.price.$numberDecimal} VND</h4>
                      </td>
                      <td>
                        <div className="cart-table-body-quantity">
                          <button
                            onMouseUp={() => removeItemWithQuantity(item)}
                            // onClick={() => removeItemWithQuantity(item)}
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => addItem(item)}>+</button>
                        </div>
                      </td>
                      <td>
                        <h4>{calculateTotalPriceByItem(item)} VND</h4>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            <tr className="cart-total-checkout">
              <td colSpan="4">
                <h3>{totalPrice} VND</h3>
                <Link to="/" className="error_btn">
                  CHECKOUT
                </Link>
              </td>
            </tr>
          </table>
        </div>
      )}
    </>
  );
};
