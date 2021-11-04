import React from 'react'
import { SideBar } from './SideBar'

export const MyOrders = () => {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">MY ACCOUNT</h1>
            <div className="profile-content">
                <SideBar/>
                <div>
                    <h2>My Orders</h2>
                    <table className="table-profile table-width">
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
    )
}