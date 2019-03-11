import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";



import { LOAD_MEALS } from "./store/actions/action-functions";
import { SEARCH_MEALS_RESULTS } from "./store/actions/action-functions";
import {mealsdbparser } from "./common/Apiparser/apiparser";

import './App.css';

//COMPONENTS
import Home from "./home/home";


class App extends Component {


  async componentDidMount(){
    const latestRecipes = await axios.get(`https://www.themealdb.com/api/json/v1/1/latest.php`);
    console.log(latestRecipes)
    const meals = await mealsdbparser(latestRecipes.data.meals);
    console.log(meals);
  
   this.props.setMeals(meals)

  }

   searchData = async () => {
    const searchData = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.props.searchvalue}`)
    const parsedSearchData = await mealsdbparser(searchData.data.meals);
    
    this.props.searchMeals(parsedSearchData);
   }
  render() {
    return (
      <div className="app-container">
        <header className="app-main-header">
         <Home searchData={this.searchData}/>

        </header>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    meals : state.meals,
    searchvalue : state.searchvalue
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setMeals : (meals) => {
      dispatch({
        type: LOAD_MEALS,
        meals
      })
    },
    searchMeals : (searchresults) => {
      dispatch({
        type: SEARCH_MEALS_RESULTS,
        searchresults
      })
    }
  }
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
