import React, {Component} from "react";
import "./Homemaindisplay.css";


//COMPONENTS
import Title from "../../common/Title/Title";


class Homemaindisplay extends Component{

    render(){

        return(
            <div className="home-main-display">
                <div className="home-main-display-title">
                    <Title name="TITLE" titleClass="title"/>
                </div>
            </div>
        )
    }
}

export default Homemaindisplay;