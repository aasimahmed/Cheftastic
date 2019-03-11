import React from "react";
import "./Slider.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Recipecard from "../Recipecard/Recipecard";


const Slider = ({userrecipes}) => {
    const recipelist = userrecipes.map(val => {
return(
    <Link to={`/recipes/${val.id}`}>   
    <div className="slider-card-container">
    <Recipecard
        key={val.id}
        id={val.id}
        title={val.title} 
        image={val.image} 
        imageheight="200px"
        imagewidth="200px" 
        />
    </div>
    </Link> 
    )
})

return(
    <div className="slider-container">
    {recipelist}
    </div>
)

}

const mapStateToProps = state => {
    return {
        userrecipes: state.user.recipes

    }
}

const Sliderconnect = connect(mapStateToProps, null)(Slider)

export default Sliderconnect ;