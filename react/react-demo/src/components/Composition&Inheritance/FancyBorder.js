import React from 'react'
import './FancyBorder.css'
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            <h1>{props.title}</h1>
            {props.children}
            <div className="container">
                <div className="left-part">{props.left}</div>
                <div className="right-part">{props.right}</div>
            </div>
        </div>
    )
}
export default FancyBorder
