import React from "react";
import "./Nav.css";

//COMPONENTS 
import SearchNav from "./Search-Nav/Search-Nav";

//IMAGES
import logo from "./logo.png";

const Nav = ({searchData}) => {
return(
    <nav>
        <div className="nav">
            <div className="nav-logo-left">
                <img alt="nav-logo" width="200px"src={logo} height="100px"/>
            </div> 
            <div className="nav-mid">
                <SearchNav searchData={searchData}/>    
            </div>
            <div className="nav-right">
                <ul className="nav-right-list-container">
                    <li>My Recipies</li>
                    <li>Explore</li>
                    <li>Create</li>
                </ul>
            </div>
        </div>
    </nav>

)}

export default Nav;