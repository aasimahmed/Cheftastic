import React, { Component } from 'react';
import './App.css';

//COMPONENTS
import Home from "./home/home"
import recipelist from "./recipelist/recipelist"

class App extends Component {


  componentDidMount = () => {

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

export default App;
