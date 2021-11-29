import React, { useContext, useState, useEffect } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/Icons/right-arrow.svg";
import { CartContext } from "../../contexts/cart_context";
import { formatter } from "../../Helper/formatter";
import { AuthContext } from "../../contexts/auth_context";
import { useHistory } from "react-router-dom";
import checkoutApi from "../../api/checkout_api";
import cartIcon from "../../assets/Icons/shopping-basket.svg";
import isEmpty from "validator/lib/isEmpty";

export const Checkout = () => {
  const {
    state: { cartItems, totalPrice, totalItems },
    clearItemFromCart,
  } = useContext(CartContext);
  const {
    authState: { user },
  } = useContext(AuthContext);

  const [infoCheckout, setInfoCheckout] = useState({
    fullname: user?.fullname || "",
    phone: "",
    streetAddress: "",
    district: "",
    province: "",
  });
  const { fullname, phone, streetAddress, district, province } = infoCheckout;

  const [openCart, setOpenCart] = useState(true);
  const [openStepOne, setStepOne] = useState(true);
  const [openStepTwo, setStepTwo] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [validationMsg, setValidationMsg] = useState({});
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

      const checkoutData = await checkoutApi.postCheckout(info);
      if (checkoutData.data.success) {
        console.log(checkoutData.data.message);
        handlePushPage();
        clearItemFromCart({ id: 0 });
      }
    } catch (error) {
      console.log("error pass", error.response.data);
    }
  };

  let history = useHistory();
  const handlePushPage = () => {
    history.push("/after-checkout");
  };
  const handleClickItemPassDetail = (item) => {
    history.push("/detail/" + item);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(fullname)) {
      msg.fullname = "Please input your fullname.";
    }
    if (isEmpty(phone)) {
      msg.phone = "Please input your phone.";
    } else if (phone.length > 11 || phone.length < 10) {
      msg.phone = "Please input a valid phone number.";
    }
    if (isEmpty(streetAddress)) {
      msg.streetAddress = "Please input your street address.";
    }
    if (isEmpty(district)) {
      msg.district = "Please input your district.";
    }
    if (isEmpty(province)) {
      msg.province = "Please input your province or city.";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
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
        <div className="section-checkout">
          <div className="checkout-container">
            <div className="checkout-wrapper-bk row">
              <div className="checkout-left-bk">
                <div className="checkout-header">
                  <h1 className="checkout-title">CHECKOUT</h1>
                  <Link className="checkout-link" to="/shop">
                    KEEP SHOPPING
                    <img
                      className="checkout-arrow-icon"
                      src={arrow}
                      alt="arrow"
                    ></img>
                  </Link>
                </div>
                <div className="checkout-view-cart ">
                  <div className="checkout-cart-info">
                    <div className="checkout-cart-info-style">
                      <h3>PRODUCT</h3>
                      <h5>({totalItems} ITEMS)</h5>
                    </div>
                    <div className="checkout-cart-info-style">
                      <h5>{openCart ? "Close Cart" : "Open Cart"}</h5>
                      <button
                        className="checkout-cart-info-btn"
                        onClick={() => setOpenCart(!openCart)}
                      >
                        {openCart ? "-" : "+"}
                      </button>
                    </div>
                  </div>
                  {openCart && (
                    <div className="table-scroll">
                      <table className="checkout-cart ">
                        <colgroup>
                          <col style={{ width: "21%" }}></col>
                          <col style={{ width: "75%" }}></col>
                          <col style={{ width: "5%" }}></col>
                        </colgroup>
                        <tbody className="checkout-table-tbody">
                          {cartItems &&
                            cartItems.length > 0 &&
                            cartItems.map((item) => {
                              return (
                                <tr
                                  key={item._id}
                                  title={item.productName}
                                  onClick={() =>
                                    handleClickItemPassDetail(item._id)
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  <td>
                                    <img
                                      className="detail-img"
                                      src={item.image}
                                      alt="detail"
                                    ></img>
                                  </td>
                                  <td>
                                    <h4 className="detail-name">
                                      {item.productName}{" "}
                                    </h4>
                                    <p>Quantity: {item.quantity}</p>
                                  </td>
                                  <td>
                                    {formatter.format(item.totalPriceByItem)}{" "}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                <div className="checkout-info-wrapper">
                  <div className="checkout-info-title">
                    <h3>1. Shipping</h3>
                    {!openStepOne && (
                      <button
                        className="checkout-btn checkout-info-title-btn"
                        onClick={() => {
                          setStepOne(true);
                          setStepTwo(false);
                          setConfirmOrder(false);
                        }}
                      >
                        EDIT
                      </button>
                    )}
                  </div>
                  {openStepOne && (
                    <div className="checkout-info-form">
                      <div className="checkout-info-content">
                        <div className="checkout-subtitle">FULL NAME*</div>
                        <input
                          type="text"
                          className="checkout-info-input"
                          name="fullname"
                          value={fullname}
                          onChange={onChangeInfoCheckout}
                        />
                        <p style={{ color: "red" }}>
                          {validationMsg["fullname"]}
                        </p>
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
                        <p style={{ color: "red" }}>{validationMsg["phone"]}</p>
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
                        <p style={{ color: "red" }}>
                          {validationMsg["streetAddress"]}
                        </p>
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
                        <p style={{ color: "red" }}>
                          {validationMsg["district"]}
                        </p>
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
                        <p style={{ color: "red" }}>
                          {validationMsg["province"]}
                        </p>
                      </div>
                      <div className="checkout-btn-continue">
                        <button
                          className="checkout-btn checkout-info-content-btn"
                          onClick={() => {
                            const isValid = validateAll();
                            if (!isValid) return;
                            setStepOne(false);
                            setStepTwo(true);
                          }}
                        >
                          CONTINUE
                        </button>
                      </div>
                    </div>
                  )}
                  {!openStepOne && (
                    <div className="checkout-info-after">
                      {fullname && <p>{fullname}</p>}
                      {phone && <p>{phone}</p>}
                      {streetAddress && district && province && (
                        <p>{`${streetAddress}, ${district}, ${province}`}</p>
                      )}
                    </div>
                  )}
                </div>
                <div className="checkout-info-wrapper">
                  <h3>2. Payment</h3>
                  {openStepTwo && (
                    <div className="checkout-payment-content">
                      <div className="checkout-group-button">
                        <label className="container">
                          Cash on Delivery (COD)
                          <input
                            type="radio"
                            name="radio"
                            defaultChecked="checked"
                          />
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
                      <div className="checkout-btn-continue">
                        <button
                          className="checkout-btn checkout-info-content-btn"
                          onClick={() => setConfirmOrder(true)}
                        >
                          CONTINUE
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="checkout-right-bk">
                <div className="checkout-right-content">
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
                  {confirmOrder && (
                    <div
                      className="checkout-btn-bigger checkout-info-content-btn"
                      onClick={handleSubmitInfoCheckout}
                    >
                      ORDER
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
