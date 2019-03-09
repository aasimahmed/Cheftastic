import React, {Component} from "react";
import "./Homelanding.css";

//

import Homesidebar from "../home-side-bar/Homesidebar";
import Homemainquerybox from "../home-main-querybox/Homemainquerybox";
import Homemaindisplay from "../home-main-display/Homemaindisplay";

class Homelanding extends Component {
    

    render(){
        return(
            <div className="home-landing-positioner">
                <div className="home-sidebar">
                <Homesidebar/>
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