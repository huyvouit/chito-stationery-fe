import React from 'react'
import "../../style/About/about.css";

export const Terms = () => {
    return (
        <div className="about_wrapper">
            <h1 className="about_title">TERMS & CONDITIONS</h1>
            <div className="about_content">
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">DELIVERY</h3>
                    <p>For delivery options and estimated timings, please see our DELIVERY + RETURNS page. 
                        Shipping costs are calculated at checkout, and are based on the charges we incur from 
                        Economical Delivery, with zero mark-up and all packaging supplied free of charge.</p>
                </div>
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">RETURNS + REFUNDS</h3>
                    <p>You may return items within 7 days of receiving them. Please record the unpacking process. 
                        Once we receive the returned items in a condition suitable for re-sale, we will issue you 
                        with a refund or a voucher for the full value (minus any postage fees) to spend at www.chitostationery.com. 
                        Unfortunately we cannot offer refunds or exchanges for items that have been used or damaged.</p>
                </div>
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">GIFT CARDS / VOUCHERS</h3>
                    <p>Multiple Gift Cards can be used against a single purchase, however change will not be given. 
                        Gift Cards are normally valid for 1 year, unless otherwise stated on the card.</p>
                </div>
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">CANCELLATIONS</h3>
                    <p>If you would like to cancel an order, please email us as soon as possible. If orders have not yet shipped, 
                        we will refund the value of your order. If items have already shipped, then we are unable to cancel your order, 
                        but you may return it to us as detailed above.</p>
                </div> 
                <div className="about_subwrapper">
                    <h3 className="about_subtitle">SECURITY</h3>
                    <p>Your security when using our site is extremely important to us. We take all appropriate measures to protect any 
                    personal information you provide us on this website. Full details of our privacy policy can be 
                    found <a className="about_link" href="">here</a>.</p>
                </div>
            </div>
        </div>
                      
    )
}