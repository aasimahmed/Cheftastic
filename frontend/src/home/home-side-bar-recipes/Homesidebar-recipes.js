import React from "react";
import "./Homesidebar-recipes.css";

//COMPONENTS
import Recipecard from "../../common/Recipecard/Recipecard";


const HomesidebarRecipes = ({recipes}) => {

    const userRecipes = recipes.map(recipe => ( //RENDER OUT EACH RECIPIE
        <div className="user-recipe-card">
            <Recipecard key={recipe.id}title={recipe.title} image={recipe.image} imagetext={recipe.imagetext} description={recipe.description}/>
        </div>
    ))


    return(
        <div className="user-recipe-container">
            {userRecipes}
        </div>
    )
}

export default HomesidebarRecipes;