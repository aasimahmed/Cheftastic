import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";
//COMPONENTS 
import SearchNav from "./Search-Nav/Search-Nav";

//IMAGES
import logo from "./logo.png";

const Nav = ({searchData}) => {
return(
    <nav>
        <div className="nav">
            <div className="nav-logo-left">
                <Link to="/"><img className="nav-logo-left-image"alt="nav-logo" width="50%"src={logo} height="100px"/></Link>
            </div> 
            <div className="nav-mid">
                <SearchNav searchData={searchData}/>    
            </div>
            <div className="nav-right">
                <ul className="nav-right-list-container">
                    <Link to="/user"><li>My Recipies</li></Link>
                    <li>Explore</li>
                    <li>Create</li>
                </ul>
            </div>
        </div>
    </nav>

)}

export default Nav;