import React from "react";
import "./Recipepreview.css";

import { connect } from "react-redux";
import { SET_SELECTED_RECIPE } from "../../store/actions/action-functions";

import Userpreviewcard from "../../user/User-recipe-preview-card/Userpreviewcard";

const Recipepreview = ({selectedRecipe, setSelectedRecipe}) => {

    
    return(
        <div className="recipe-preview-container dragOver" onDragOver={(e) => { e.preventDefault() }}
        
        onDrop={(e) => {
            
            let text = e.dataTransfer.getData("text/plain")
            let links  = e.dataTransfer.getData("text/uri-list")
            //image[0] is image
            let textParsed = text.split(",")
            let linksParsed = links.split(",")
            
            
            let data = {
                id: textParsed[0],
                title: textParsed[1],
                image : linksParsed[0],
                youtube : linksParsed[1],
                link : linksParsed[2],
                
            }

            setSelectedRecipe(data)
        }
        
    }>
        <Userpreviewcard image={selectedRecipe.image} 
        title={selectedRecipe.title} 
        youtube={selectedRecipe.youtube} 
        link = {selectedRecipe.link}
        id = {selectedRecipe.id}
        />

        </div>

    )
}

const mapStateToProps = state => {
    return {
        selectedRecipe : state.user.selectedRecipe
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedRecipe : (data) => {
            dispatch({
            type : SET_SELECTED_RECIPE,
            data
            })
        }
    }
}

const Recipepreviewconnect = connect(mapStateToProps, mapDispatchToProps)(Recipepreview);


export default Recipepreviewconnect;