import React from "react";
import "./home.css";

//COMPONENTS

import Homelanding from "./home-landing/Homelanding";


const Home  = ({searchData}) => {

    
        return(
        <div>

            <section className="landing-container">
                <Homelanding/>
            </section>
        </div>
        )
    
}

export default Home;