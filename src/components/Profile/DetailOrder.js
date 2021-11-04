import React from 'react'
import { SideBar } from './SideBar'
import { Link } from 'react-router-dom'
import imgProduct from "../../assets/Images/candy.jpg"

export const DetailOrder = () => {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">MY ACCOUNT</h1>
            <div className="profile-content">
                <SideBar/>
                <div>
                    <div className="detail-order-top">
                        <h3>ID: #0001</h3>
                        <h3>Date: 27/10/2021</h3>
                    </div>
                    <table className="table-detail-profile table-width">
                        <colgroup>
                            <col style={{ width: "18%" }}></col>
                            <col style={{ width: "62%" }}></col>
                            <col style={{ width: "18%" }}></col>
                        </colgroup>
                        <tr>
                            <td>
                                <img className="detail-img" src={imgProduct}></img>
                            </td>
                            <td>
                                <h4 className="detail-name">CANDY STICKERS </h4>
                                <p>Quantity: 1</p>
                            </td>
                            <td>590.000 VND</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}