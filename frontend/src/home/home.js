import React, {Component} from "react";
import "./home.css";

//COMPONENTS

import Nav from "../common/Nav/Nav";
import Homelanding from "./home-landing/Homelanding";


class Home extends Component{

    render(){
        return(
        <div>
            <header>
                <Nav/>
            </header>
            <section className="landing-container">
                <Homelanding/>
            </section>
        </div>
        )
    }
}

export default Home;