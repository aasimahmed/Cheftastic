import React from "react";
import "./user.css";

//Components
import Userprofilebar from "./User-sideprofilebar/Userprofilebar"
import Usersliderview from "../user/User-main-sliderview/Usersliderview";
import Recipepreview from "../common/Recipepreview/Recipepreview";

const User = () => {



    return(
        <div className="user-container">
            <div className="user-side-profilebar-container">
                <Userprofilebar />
            </div>
            <div className="user-main-slider-container">
                <Usersliderview />
            </div>
            <div className="user-main-recipepreview-container">
                <Recipepreview />
            </div>
        
        
        </div>
    )
}

export default User;