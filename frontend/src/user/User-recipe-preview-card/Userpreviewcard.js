import React from "react";
import "./Userpreviewcard.css";

const Userpreviewcard = ({title, image}) => {
return(
    <div className="preview-card">
        <h2 className="title"> {title} </h2>
        <img src={image} alt="test" width="300px" height="300px" 
        onPointerEnter={(e) => document.querySelector(`.preview-card`).classList.add("test")}/>
    </div>
)
}

export default Userpreviewcard;