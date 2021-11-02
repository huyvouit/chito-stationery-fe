import React from 'react'
import { SideBar } from './SideBar'
import { Link } from 'react-router-dom'

export const AccAddress = () => {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">MY ACCOUNT</h1>
            <div className="profile-content">
                <SideBar/>
                <div>
                    <h2>Default Shipping Address</h2>
                    <div className="profile-info-subtitle">
                        <p>Sweet Latte</p>
                        <p>0909272727</p>
                        <p>2710 Cappuccino Street, Espresso, Robusta City</p>
                    </div>
                    <div className="btn-container">
                        <Link to="/profile/acc-address/edit-address" className="profile-info-btn">CHANGE SHIPPING ADDRESS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}