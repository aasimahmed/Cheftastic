import React from "react";
import "./home.css";

//COMPONENTS

import Nav from "../common/Nav/Nav";
import Homelanding from "./home-landing/Homelanding";


const Home  = ({searchData}) => {

    
        return(
        <div>
            <header>
                <Nav searchData={searchData}/>
            </header>
            <section className="landing-container">
                <Homelanding/>
            </section>
        </div>
        )
    
}

export default Home;