import React from "react";
import "../Styles/Dropdown.css"

function Dropdown(props) {
    return(
        <div className="dropdown">
            <div className="dropdown__header">
                {props.title}
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="drowpdown__description">
                {props.desc}
            </div>
        </div>
    )
}

export default Dropdown