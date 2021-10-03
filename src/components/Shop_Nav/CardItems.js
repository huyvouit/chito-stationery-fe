import React from 'react'
import '../../style/Shop/CardItems.css'

function CardItems(props) {
    return (
        <>
            <div className="card">
                <img className="ItemImg" src={props.src} alt="Avatar" />
                <div className="ItemTxt">
                    <h5>{props.text}</h5>
                    <p>{props.price}</p>
                </div>
            </div>
        </>
    )
}

export default CardItems
