import React from 'react'
import { SideBar } from './SideBar'

export const EditAddress = () => {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">MY ACCOUNT</h1>
            <div className="profile-content">
                <SideBar/>
                <div>
                    <div className="account-info">
                        <div className="profile-col-width">
                            <h2>Contact Information</h2>
                            <h5 className="profile-info-subtitle">FULL NAME</h5>
                            <div className="profile-info-input">
                                <input type="text" required placeholder="get name user zo đây nhaa"/>
                            </div>
                            <h5 className="profile-info-subtitle">PHONE</h5>
                            <div className="profile-info-input">
                                <input type="number" required/>
                            </div>
                        </div>
                        <div className="profile-col-width account-info-right">
                            <h2>Address</h2>
                            <h5 className="profile-info-subtitle">STREET ADDRESS*</h5>
                            <div className="profile-info-input">
                                <input type="text" required/>
                            </div>
                            <h5 className="profile-info-subtitle">DISTRICT*</h5>
                            <div className="profile-info-input">
                                <input type="text" required/>
                            </div>
                            <h5 className="profile-info-subtitle">PROVINCE/CITY*</h5>
                            <div className="profile-info-input">
                                <input type="text" required/>
                            </div>
                        </div>
                    </div>
                    <div className="info-footer">
                        <button className="btn-save-edit-address">SAVE</button>
                        <button className="btn-cancel">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}