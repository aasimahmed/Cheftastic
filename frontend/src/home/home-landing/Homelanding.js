import React, {Component} from "react";
import "./Homelanding.css";

//

import Homesidebar from "../home-side-bar/Homesidebar";
import Homemainquerybox from "../home-main-querybox/Homemainquerybox";
import Homemaindisplay from "../home-main-display/Homemaindisplay";

class Homelanding extends Component {
    state={
        recipes: [
            {
                id: 1,
                title: "Spaghetti",
                description: "A delicious bowl of spaghetti, using tomato sauce",
                image : "https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpg",
                imagetext : "imagetext"
            },
            {
                id: 2,
                title: "Spaghetti",
                description: "A delicious bowl of spaghetti, using tomato sauce",
                image : "https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpg",
                imagetext : "imagetext"
            },
            {
                id: 3,
                title: "Spaghetti",
                description: "A delicious bowl of spaghetti, using tomato sauce",
                image : "https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpg",
                imagetext : "imagetext"
            }
        ]
    }


    render(){
        return(
            <div className="home-landing-positioner">
                <div className="home-sidebar">
                <Homesidebar recipes={this.state.recipes}/>
                </div>
                <div className="home-main">
                    <Homemainquerybox/>
                    <Homemaindisplay/>
                </div>
            </div>
            
        )
    }
}

export default Homelanding;