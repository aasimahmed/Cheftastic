import React from "react";
import "./Homesidebar-recipes.css";

//COMPONENTS
import Recipecard from "../../common/Recipecard/Recipecard";


const HomesidebarRecipes = ({recipes}) => {

    const userRecipes = recipes.map(val => ( //RENDER OUT EACH RECIPIE
        <div className="user-recipe-card">
            <Recipecard />
        </div>
    ))

    
    return(
        <div className="user-recipe-container">
            {userRecipes}
        </div>
    )
}

export default HomesidebarRecipes;