import React from 'react'
import { SideBar } from './SideBar'

export const AccAddress = () => {
    return (
        <div className="profile-wrapper">
            <h1 className="profile-title">MY ACCOUNT</h1>
            <div className="profile-content">
                <SideBar/>
            </div>
        </div>
    )
}