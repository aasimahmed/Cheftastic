import React from "react";
import "./Homesidebar.css";

//COMPONENTS

import HomesidebarRecipes from "../home-side-bar-recipes/Homesidebar-recipes";

const Homesidebar = ({recipes}) => {
    return(
        <div className="homesidebar">
            <HomesidebarRecipes recipes={recipes}/>
        </div>
        
    )
}

export default Homesidebar;