import React from 'react'
import { SideBar } from './SideBar'

export const AccInfo = () => {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">MY ACCOUNT</h1>
            <div className="profile-content">
                <SideBar/>
                <div>
                    <div className="account-info">
                        <div className="profile-col-width">
                            <h2>Account Information</h2>
                            <h5 className="profile-info-subtitle">FULL NAME</h5>
                            <div className="profile-info-input">
                                <input type="text" required placeholder="get name user zo đây nhaa"/>
                            </div>
                            <h5 className="profile-info-subtitle">EMAIL</h5>
                            <div className="profile-info-input">
                                <input type="email" required placeholder="email nữa"/>
                            </div>
                            <label class="container profile-info-subtitle">CHANGE PASSWORD
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label> 
                        </div>
                        <div className="profile-col-width account-info-right">
                            <h2>Change Password</h2>
                            <h5 className="profile-info-subtitle">CURRENT PASSWORD*</h5>
                            <div className="profile-info-input">
                                <input type="password" required/>
                            </div>
                            <h5 className="profile-info-subtitle">NEW PASSWORD*</h5>
                            <div className="profile-info-input">
                                <input type="password" required/>
                            </div>
                            <h5 className="profile-info-subtitle">CONFIRM NEW PASSWORD*</h5>
                            <div className="profile-info-input">
                                <input type="password" required/>
                            </div>
                        </div>
                    </div>
                    <div className="info-footer">
                        <p>
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a
                                className="signin_link"
                                href="https://policies.google.com/privacy"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                                className="signin_link"
                                href="https://policies.google.com/terms"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Terms of Service
                            </a>{" "}
                            apply.
                        </p>
                        <button className="btn-save">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}