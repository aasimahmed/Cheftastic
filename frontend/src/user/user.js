import React from "react";
import "./user.css";

//Components
import Userprofilebar from "./User-sideprofilebar/Userprofilebar"
import Slider from "../common/Slider/Slider";
import Recipepreview from "../common/Recipepreview/Recipepreview";

const User = () => {



    return(
        <div className="user-container">
            <div className="user-side-profilebar-container">
                <Userprofilebar />
            </div>
            <div className="user-main-slider-container">
                <Slider />
            </div>
            <div className="user-main-recipepreview-container">
                <Recipepreview />
            </div>
        
        
        </div>
    )
}

export default User;