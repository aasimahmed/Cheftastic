import React from "react";
import "./Homelanding.css";

//COMPONENTS

import Homesidebar from "../home-side-bar/Homesidebar";
import Homemainquerybox from "../home-main-querybox/Homemainquerybox";
import Homemaindisplay from "../home-main-display/Homemaindisplay";


//NODEMODULES
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        meals : state.meals
    }
}




const Homelanding = (props) => {


        return(
            <div className="home-landing-positioner">
                <div className="home-sidebar">
                <Homesidebar recipes={props.meals}/>
                </div>
                <div className="home-main">
                    <Homemainquerybox/>
                    <Homemaindisplay/>
                </div>
            </div>
            
        )
    }



const Homelandingconnected = connect(mapStateToProps, null)(Homelanding)

export default Homelandingconnected;