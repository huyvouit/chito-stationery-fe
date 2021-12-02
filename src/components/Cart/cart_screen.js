import React, { useContext } from "react";
import "../../style/Cart/cart_screen.css";
import cartIcon from "../../assets/Icons/shopping-basket.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart_context";
import { useHistory } from "react-router-dom";
import { formatter } from "../../Helper/formatter";

export const CartScreen = () => {
  const {
    state: { cartItems, totalPrice, totalItems },
    addItem,
    removeItem,
    removeItemWithQuantity,
  } = useContext(CartContext);
  console.log(totalItems);

  let history = useHistory();
  const handleClickItemPassDetail = (item) => {
    history.push("/detail/" + item);
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
            <thead>
              <tr className="cart-table-header">
                <th>Product</th>
                <th className="col-price-item">Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.length > 0 &&
                cartItems.map((item) => {
                  return (
                    <tr key={item._id} className="cart-table-body">
                      <td>
                        <div className="cart-table-body-product">
                          <img
                            src={item.image}
                            alt="product"
                            className="cart-table-body-product-image"
                            onClick={() => handleClickItemPassDetail(item._id)}
                          />
                          <div className="cart-table-body-product-content">
                            <div className="">
                              <span>
                                <p
                                  className="cart-table-body-product-content-name"
                                  onClick={() =>
                                    handleClickItemPassDetail(item._id)
                                  }
                                >
                                  {item.productName}
                                </p>
                              </span>
                            </div>
                            <p
                              className="cart-table-body-product-content-remove"
                              onClick={() => removeItem(item)}
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="col-price-item fz-price">
                        <h4>{formatter.format(item.price.$numberDecimal)} </h4>
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
                          <button onClick={() => addItem(item, 1, 1)}>+</button>
                        </div>
                      </td>
                      <td className="fz-price">
                        <h4 className="col-total-item">{formatter.format(item.totalPriceByItem)}</h4>
                      </td>
                    </tr>
                  );
                })}

              <tr className="cart-total-checkout">
                <td colSpan="4">
                  <h3 className="fz-price">{formatter.format(totalPrice)}</h3>
                  <Link to="/checkout" className="error_btn">
                    CHECKOUT
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
