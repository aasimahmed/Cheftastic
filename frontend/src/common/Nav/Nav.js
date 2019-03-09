import React from "react";
import "./Nav.css";

//COMPONENTS 
import SearchNav from "./Search-Nav/Search-Nav";

const Nav = () => {
return(
    <nav>
        <div className="nav">
            <div className="nav-logo-left">
                <h1>LOGO</h1>
            </div> 
            <div className="nav-mid">
                <SearchNav />    
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