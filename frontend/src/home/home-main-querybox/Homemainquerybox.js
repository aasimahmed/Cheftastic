import React from "react";
import "./Homemainquerybox.css";

import { connect } from "react-redux";

const Homemainquerybox = ({searchresults}) => {
    return(
        <div className="home-main-querybox">
            <div>
                <h3>Search results : 
                {(searchresults.length === undefined || searchresults.length === null) ? "No results found!" : `${searchresults.length} results found!`}</h3>
            </div>
            
            <div>
                Results: Amount
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        searchresults : state.searchresults
    }
}

const mapDispatchToProps = dispatch => {
    return{
    set : (item) => {  
        dispatch({
            type : "something"

        })
    }
}
}

const Homemainqueryboxconnect = connect(mapStateToProps, mapDispatchToProps)(Homemainquerybox);


export default Homemainqueryboxconnect;