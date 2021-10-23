import React from 'react'
import "./Filter.css"

function Filter({ show, close }) {
    return (
        <div
            className="filter"
            style={{
                transform: show ? "translate(0, 0)" : "translate(-1000px,0)",
                opacity: show ? "1" : "0",
            }}
        >
           <h1>Halo</h1>
        </div>
    )
}

export default Filter
