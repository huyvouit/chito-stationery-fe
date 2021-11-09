import React, { useContext, useState, useEffect } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/Icons/right-arrow.svg";
import { CartContext } from "../../contexts/cart_context";
import { formatter } from "../../Helper/formatter";
import { AuthContext } from "../../contexts/auth_context";
import { useHistory } from "react-router-dom";
import checkoutApi from "../../api/checkout_api";
export const Checkout = () => {
  const {
    state: { cartItems, totalPrice, totalItems },
  } = useContext(CartContext);
  const {
    authState: { authLoading, user },
  } = useContext(AuthContext);

  const [infoCheckout, setInfoCheckout] = useState({
    fullname: user?.fullname || "",
    phone: "",
    streetAddress: "",
    district: "",
    province: "",
  });
  const { fullname, phone, streetAddress, district, province } = infoCheckout;
  console.log("info:", infoCheckout);

  useEffect(() => {
    console.log("run effect");
    let arrAddress = "";
    if (user?.address) {
      arrAddress = user?.address.split(",") || "";
    }
    setInfoCheckout({
      ...infoCheckout,
      fullname: user?.fullname || "",
      phone: user?.phone || "",
      streetAddress: arrAddress !== "" ? arrAddress[0] : "",
      district: arrAddress !== "" ? arrAddress[1] : "",
      province: arrAddress !== "" ? arrAddress[2] : "",
    });
  }, [user]);

  const onChangeInfoCheckout = (event) =>
    setInfoCheckout({
      ...infoCheckout,
      [event.target.name]: event.target.value,
    });

  const handleSubmitInfoCheckout = async () => {
    try {
      const info = {
        customerAddress: streetAddress + "," + district + "," + province,
        customerEmail: user?.email || "",
        customerName: fullname,
        customerPhone: phone,
        productList: cartItems,
        totalCost: totalPrice,
      };
      console.log("postCheckout: ", info);
      handlePushPage();
      // const checkoutData = await checkoutApi.postCheckout(info);
      // if (checkoutData.data.success) {
      //   // handlePushPage("profile/acc-address");
      //   console.log(checkoutData.data.msg);
      // }
    } catch (error) {
      // console.log("error pass", error.response.data);
      console.log("error");
    }
  };

  let history = useHistory();
  const handlePushPage = () => {
    history.push("/after-checkout");
  };

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
              <h3>PRODUCT</h3>
              <h5>({totalItems} ITEMS)</h5>
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
            <tbody className="checkout-table-tbody">
              {cartItems &&
                cartItems.length > 0 &&
                cartItems.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        <img
                          className="detail-img"
                          src={item.image}
                          alt="detail"
                        ></img>
                      </td>
                      <td>
                        <h4 className="detail-name">{item.productName} </h4>
                        <p>Quantity: {item.quantity}</p>
                      </td>
                      <td>{formatter.format(item.totalPriceByItem)} </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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
            <input
              type="text"
              className="checkout-info-input"
              name="fullname"
              value={fullname}
              onChange={onChangeInfoCheckout}
            />
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">PHONE NUMBER*</div>
            <input
              type="number"
              className="checkout-info-input"
              name="phone"
              value={phone}
              onChange={onChangeInfoCheckout}
            />
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">STREET ADDRESS*</div>
            <input
              type="text"
              className="checkout-info-input"
              name="streetAddress"
              value={streetAddress}
              onChange={onChangeInfoCheckout}
            />
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">DISTRICT*</div>
            <input
              type="text"
              className="checkout-info-input"
              name="district"
              value={district}
              onChange={onChangeInfoCheckout}
            />
          </div>
          <div className="checkout-info-content">
            <div className="checkout-subtitle">PROVINCE/CITY*</div>
            <input
              type="text"
              className="checkout-info-input"
              name="province"
              value={province}
              onChange={onChangeInfoCheckout}
            />
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
      </div>
      <div className="checkout-right">
        <div className="checkout-summary">
          <div className="checkout-summary-title">ORDER SUMMARY</div>
          <div className="checkout-summary-content">
            <div className="checkout-right-flex checkout-more-space">
              <div>Subtotal</div>
              <div>{formatter.format(totalPrice)}</div>
            </div>
            <div className="checkout-right-flex">
              <div>Shipping</div>
              <div>{formatter.format(0)}</div>
            </div>
          </div>
          <div className="checkout-right-flex">
            <div>ORDER TOTAL</div>
            <div>{formatter.format(totalPrice)}</div>
          </div>
        </div>
        <div className="checkout-btn-continue">
          <div
            className="checkout-btn-bigger checkout-info-content-btn"
            onClick={handleSubmitInfoCheckout}
          >
            ORDER
          </div>
        </div>
      </div>
    </div>
  );
};
