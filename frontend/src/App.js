import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";

import {Switch, Route, BrowserRouter } from "react-router-dom";

import { LOAD_MEALS } from "./store/actions/action-functions";
import { SEARCH_MEALS_RESULTS } from "./store/actions/action-functions";
import {mealsdbparser } from "./common/Apiparser/apiparser";

import './App.css';

//COMPONENTS
import Nav from "./common/Nav/Nav";
import Home from "./home/home";
import User from "./user/user";



class App extends Component {


  async componentDidMount(){
    const latestRecipes = await axios.get(`https://www.themealdb.com/api/json/v1/1/latest.php`);
   
    const meals = await mealsdbparser(latestRecipes.data.meals);
    console.log(meals)
  
   this.props.setMeals(meals)

  }

   searchData = async () => {
    const searchData = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.props.searchvalue}`)
    const parsedSearchData = await mealsdbparser(searchData.data.meals);
    
    this.props.searchMeals(parsedSearchData);
   }
  render() {
    return (
      <BrowserRouter>
      <div className="app-container">
        <header className="header-container">
          <Nav searchData={this.searchData}/>
        </header>
      <Switch>
        <Route exact path="/" render={(...props) => (
                    <Home />
                  )} />

        <Route path="/login" render={(...props) => (
          <h2>This is the login page make a login component</h2>
        )}/>
        <Route path="/user" render ={(...props) => ( //Check if logged in, if not then redirect to login page
          <User />
        )} />

        <Route exact path="/user/myrecipes" render={(...props) => (
          <h2>This is the myuser Recipes route - pulls data from myuserrecipes and displays</h2>
        )}/>
        <Route exact path="/explore" render={(...props) => (
          <h2> Pulls data from a db and allows user to infinitely scroll through recipes, add or try out recipes </h2>
        )} />
        <Route  path="/explore/:recipeid" render={(...props) => (
          <h2>This allows you to find more information specifically on one recipe</h2>
        )}/>




        
        </Switch>
      </div>
      </BrowserRouter>
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
