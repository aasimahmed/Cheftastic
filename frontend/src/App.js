import React, { Component } from 'react';
import './App.css';


//NODEMODULES
import axios from "axios";
import { connect } from "react-redux";

//COMPONENTS
import Home from "./home/home"
import recipelist from "./recipelist/recipelist"

//REDUX ACTIONS
import { LOAD_MEALS } from "./store/actions/action-functions";

//KEY NEED TO ENCRYPT
let appid;
let appkey;
const baseurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



class App extends Component {


  async componentDidMount(){
    const latestRecipes = await axios.get(`https://www.themealdb.com/api/json/v1/1/latest.php`);
    console.log(latestRecipes)
    const meals = await latestRecipes.data.meals.map(val => {
       //HAVE ACCESS TO strIngredient - need to check its not an empty string
      return {
          id : val.idMeal,
          title: val.strMeal,
          description : val.strInstructions,
          image : val.strMealThumb,
          imageText : val.strTags,
          link : val.strSource,
          youtube : val.strYoutube,
          ingredients : [
            {[val.strIngredient1] : val.strMeasure1},
            {[val.strIngredient2] : val.strMeasure2},
            {[val.strIngredient3] : val.strMeasure3},
            {[val.strIngredient4] : val.strMeasure4},
            {[val.strIngredient5] : val.strMeasure5}
             
          ]
          
          }

        })
  
   this.props.setMeals(meals)
   

  }
  render() {
    return (
      <div className="app-container">
        <header className="app-main-header">
         <Home/>

        </header>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    meals : state.meals
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setMeals : (meals) => {
      dispatch({
        type: LOAD_MEALS,
        meals
      })
    }
  }
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
