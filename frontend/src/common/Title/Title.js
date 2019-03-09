import React from "react";
import "./Title.css";

const Title = ({name, titleClass}) => {
    return(
    <h2 className={titleClass}>{name}</h2>

)
}

export default Title;