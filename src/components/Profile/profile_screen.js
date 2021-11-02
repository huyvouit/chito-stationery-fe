import React from 'react'
import { SideBar } from './SideBar'
import "./profile.css"
import { Link } from 'react-router-dom'

export const ProfileScreen = () => {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">MY ACCOUNT</h1>
            <div className="profile-content">
                <SideBar/>
                <div className="profile-content-right">
                    <div className="profile-info">
                        <div className="profile-col-width">
                            <h2>Account Information</h2>
                            <h5 className="profile-info-subtitle">CONTACT INFORMATION</h5>
                            <p>Sweet Latte</p>
                            <p>sweetlatte@gmail.com</p>
                            <div className="btn-container">
                                <Link to="*" className="profile-info-btn">CHANGE PASSWORD</Link>
                            </div>
                        </div>
                        <div className="profile-col-width">
                            <h2>Address Book</h2>
                            <h5 className="profile-info-subtitle">DEFAULT SHIPPING ADDRESS</h5>
                            <p>Sweet Latte</p>
                            <p>0909272727</p>
                            <p>2710 Cappuccino Street, Espresso, Robusta City</p>
                            <div className="btn-container">
                                <Link to="*" className="profile-info-btn">EDIT ADDRESS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-order">
                        <h2>My Orders</h2>
                        <table>
                            <colgroup>
                                <col style={{ width: "10%" }}></col>
                                <col style={{ width: "50%" }}></col>
                                <col style={{ width: "10%" }}></col>
                                <col style={{ width: "30%" }}></col>
                            </colgroup>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>#0001</td>
                                <td>27/10/2021</td>
                                <td>5</td>
                                <td>590.000 VND</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}