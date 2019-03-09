import React from "react";
import "./Title.css";

const Title = ({title, titleClass}) => {
    return(
    <h2 className={titleClass}>{title}</h2>

)
}

export default Title;