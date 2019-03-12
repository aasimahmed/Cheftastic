import React from "react";
import "./Userprofilebar.css";

const Userprofilebar = () => {
    return(
        <React.Fragment>
            <div className="user-profile-userphoto">

            </div>
            <h3>Username</h3>
            <div className="user-profile-list-container">
                <li>
                </li>  
            </div> 


        </React.Fragment>
        
    )
}

export default Userprofilebar


//THIS COMPONENT WILL NEED ACCESS TO ALL AVAILABLE LISTS IN STATE.RECIPES.USER.RECIPES - then render out lists.