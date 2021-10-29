import React from 'react'
import "../../style/Checkout/after_checkout.css"
import cartTick from "../../assets/Icons/cart-tick.png"

export const AfterCheckout = () => {
    return (
        <div className="ac_wrapper">
            <h1 className="ac_title">THANKS FOR SHOPPING WITH US.</h1>
            <p className="ac_content">Your order is currently being processed.</p>
            <p className="ac_content">It will be delivered in 3-6 business days.</p>
            <img className="ac_icon" src={cartTick} alt="cart-tick"></img>
            <p className="ac_content more_space">Contact us at <a href="mailto: studio@chitostationery.com">studio@chitostationery.com</a> for any inquiries!</p>
        </div>
    )
}
