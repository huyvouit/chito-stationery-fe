import React from 'react'
import candy from "../../assets/Images/candy.jpg";
import summer from "../../assets/Images/summer.jpg";
import CardItems from './CardItems'
import '../../style/Shop/Card.css';

function Cards(props) {
    return (
        <>
            <div className="groupCard">
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
                <div className="groupCard-column">
                    <CardItems src={summer} text="hiiiii" price="1000000 VND" />
                </div>
            </div>
        </>
    )
}

export default Cards
