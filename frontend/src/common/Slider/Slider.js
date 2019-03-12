import React from "react";
import "./Slider.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { SLIDER_SCROLLER } from "../../store/actions/action-functions";

import Recipecard from "../Recipecard/Recipecard";


const Slider = ({userrecipes, scroll}) => {
    const recipelist = userrecipes.map(val => {
return(
    // <Link to={`/recipes/${val.id}`}>   
    <div className="slider-card-container" draggable="true" onDragStart={(e) => {
        console.log("being started drag")

        e.dataTransfer.setData('text/uri-list', [val.image, val.youtube, val.link])

        e.dataTransfer.setData("text/plain", [val.id, val.title])
        
        e.dataTransfer.effectAllowed = "copy"


    }
    }>
    <Recipecard
        key={val.id}
        id={val.id}
        title={val.title} 
        image={val.image} 
        imageheight="100px"
        imagewidth="100px" 
        />
    </div>
    // </Link> 
    )
})

return(
    <div className="slider-container">
        <div 
            className="arrow arrowleft"
            onClick={(e) => scroll("left", userrecipes)} >
                <i className="fas fa-arrow-left fa-3x"></i>
        </div>
        <div className="slider-recipes-container">
            {recipelist}
        </div>
        <div 
            className="arrow arrowright"
            onClick={(e) => scroll("right", userrecipes)}>
           
                <i className="fas fa-arrow-right fa-3x"></i>
        </div>
    </div>
)

}

const mapStateToProps = state => {
    return {
        userrecipes: state.user.recipes.userrecipes

    }
}

const mapDispatchToProps = dispatch => {
    return {
        scroll : (direction, recipe) => {

            
            dispatch({
            type: SLIDER_SCROLLER,
            recipe,
            name: "userrecipes",
            direction
            })
        }
    }
}

const Sliderconnect = connect(mapStateToProps, mapDispatchToProps)(Slider)

export default Sliderconnect ;