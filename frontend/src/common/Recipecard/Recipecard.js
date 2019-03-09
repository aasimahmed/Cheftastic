import React from "react";
import "./Recipecard.css";


//COMPONENTS
import Title from "../Title/Title";

const Recipecard = ({title, image, imagetext, description, link, id}) => {
    return(
        <React.Fragment>
            <div className="card-title-container" id={id}>
                <Title titleClass="title" title={title}/>
            </div>
            <div className="card-image-container">
                <img className="card-image" width="80%" height="200px"src={image} alt={imagetext}/>
            </div>
            <div className ="card-icons-container">
                <div className="card-description">{link}</div>
                <div className="card-icons">
                    <div className="icon"><i className="fas fa-info fa-3x"></i></div>
                    <div className="icon"><i className="fas fa-plus fa-3x"></i></div>
                </div>
            </div>

        </React.Fragment>
    
    )

}


export default Recipecard;