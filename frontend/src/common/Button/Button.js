import React from "react";
import "./Button.css";

const Button = ({buttonName, clickEvent, hoverEvent}) => {
    return(
        <button className="main-button" value={buttonName} onClick={clickEvent} onMouseEnter={hoverEvent}></button>
    )
}