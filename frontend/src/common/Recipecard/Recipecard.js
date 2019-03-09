import React from "react";
import "./Recipecard.css";


//COMPONENTS
import Title from "../Title/Title";

const Recipecard = () => {
    return(
        <React.Fragment>
            <div className="card-title-container">
                <Title titleClass="title"/>
            </div>
            <div className="card-image-container">
                <img src="" alt=""/>
            </div>
            <div className ="card-icons-container">
                <div><i class="fas fa-info fa-3x"></i></div>
                <div><i class="fas fa-plus fa-3x"></i></div>
            </div>
        </React.Fragment>
    
    )

}

export default Recipecard;