import React from 'react';
import "../../style/About/about.css";

export const Delivery = () => {
    return (
        <div className="about_wrapper">
            <h1 className="about_title">DELIVERY &amp; RETURNS</h1>
            <div className="about_content">
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">FREE SHIPPING</h3>
                    <p>We offer Free Shipping Nationwide.</p>
                </div>
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">DISPATCH</h3>
                    <p>We wrap every order by hand, and aim to send within 1-2 working days. 
                        If you need something urgently, or for a specific date, please 
                        let us know and we'll always do our best to help.</p>
                </div>
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">DELIVERY SERVICES</h3>
                    <p>We use Economical Delivery for all our deliveries (2-3 days).</p>
                </div>
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">RETURNS + REFUNDS</h3>
                    <p>You may return items within 7 days of receiving them. Please 
                        record the unpacking process. Once we receive the returned items 
                        in a condition suitable for re-sale, we will issue you with a refund 
                        or a voucher for the full value (minus any postage fees) to spend at 
                        www.chitostationery.com. Unfortunately we cannot offer refunds or exchanges 
                        for items that have been used or damaged.</p>
                </div> 
            </div>     
        </div>
    )
}