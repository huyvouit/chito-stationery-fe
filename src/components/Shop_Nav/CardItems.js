import React from 'react'
import '../../style/Shop/CardItems.css'

function CardItems(props) {
    return (
        <>
            <div className="card">
                <img className="ItemImg" src={props.src} alt="Avatar" />
                <div className="ItemTxt">
                    <h5>{props.text}</h5>
                    <p>{props.description}</p>
                    <h6>{props.price} VNĐ</h6>
                </div>
            </div>
        </>
    )
}

export default CardItems
