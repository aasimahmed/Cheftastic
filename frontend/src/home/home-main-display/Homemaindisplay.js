import React from "react";
import "./Homemaindisplay.css";

//NODEMODULES
import { connect } from "react-redux";

//COMPONENTS
import Title from "../../common/Title/Title";
import Recipecard from "../../common/Recipecard/Recipecard";

//

const Homemaindisplay = ({currentRecipe, searchresults}) => {

        if(searchresults.length > 0){
            const searchcards = searchresults.map(val => {
                return(
                    <div className="home-main-display-recipecard">
                    <Recipecard
                        key={val.id}
                        id={val.id}
                        title={val.title} 
                        image={val.image} 
                        imagetext={val.imagetext} 
                        link = {val.link}
                        imageheight="200px"
                        imagewidth="200px"
                    />
                    </div>
                )
                
            })
            return(

                <div className="home-main-display-searchresults">
                    {searchcards}
                </div>
            )
            
        }

        if(currentRecipe === undefined){
            return(
                <div className="home-main-display">
                <div className="home-main-display-title">
                    <Title title="TITLE" titleClass="title"/>
                </div>
            </div>
            )
        }


        const ingredientslist = currentRecipe.ingredients.filter(val => !("" in val)).map((val, idx) => {
            console.log(val)
            let key = Object.keys(val);
            return <li key={key}> {key[0]} : {val[key[0]]}</li>
            
        })
        console.log(ingredientslist)
        return(
            <div className="home-main-display">
                <div className="home-main-display-title">
                    <span>{currentRecipe.id} : </span>
                    <Title title={currentRecipe.title} titleClass="title"/>
                    
                </div>
                <div className="home-main-display-image">
                    <img src={currentRecipe.image} width="300px" alt={currentRecipe.imageText}/>
                </div>
                <div className="home-main-display-ingredients">
                    {ingredientslist}
                </div>
                <article className="home-main-display-description">
                    <p>{currentRecipe.description}</p>
                </article>

                <article>
                    
                </article>
            </div>
        )
    }

const mapStateToProps = state => {
    return{
        currentRecipe : state.currentRecipe,
        searchresults : state.searchresults
    }
}

const Homemaindisplayconnected = connect(mapStateToProps, null)(Homemaindisplay);

export default Homemaindisplayconnected;