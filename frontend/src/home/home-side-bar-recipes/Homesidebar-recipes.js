import "./Homesidebar-recipes.css";

//Nodemodules
import React from "react";
import { connect } from "react-redux";

//COMPONENTS
import Recipecard from "../../common/Recipecard/Recipecard";

//CONSTANTS
import { SET_CURRENT_MEAL } from "../../store/actions/action-functions";


const HomesidebarRecipes = ({meals, setCurrent}) => {

    if(meals === undefined){
        return <p>LOADING </p>
    }

    const userRecipes = meals.map(recipe => ( //RENDER OUT EACH RECIPIE - DATA IS FILTERED IN APP.
        <div className="user-recipe-card" key={recipe.id} onClick={(e) => setCurrent(recipe.id)}>
            <Recipecard 
                        id={recipe.id}
                        title={recipe.title} 
                        image={recipe.image} 
                        imagetext={recipe.imagetext} 
                        description={recipe.description}
                        link = {recipe.link}
                        
                        />
        </div>
    ))


    return(
        <div className="user-recipe-container">
            {userRecipes}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        meals : state.meals
    }
}


const mapDistpatchToProps = dispatch => {
    return{
        setCurrent : (id) => {
            dispatch({
                type : SET_CURRENT_MEAL,
                id
            })
        }
    }
}

const HomesidebarRecipesconnect = connect(mapStateToProps, mapDistpatchToProps)(HomesidebarRecipes);

export default HomesidebarRecipesconnect;