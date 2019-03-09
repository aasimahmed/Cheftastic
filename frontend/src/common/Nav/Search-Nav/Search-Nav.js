import React from "react";
import { connect } from "react-redux";
import "./Search-Nav.css";

//CONSTANT DISPATCH TYPES
import { NAV_SEARCHVALUE_UPDATE } from "../../../store/actions/action-functions"

const mapStateToProps = state => {
    return {
        searchvalue : state.searchvalue
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchValue: (name) => {
            dispatch({
                type: NAV_SEARCHVALUE_UPDATE,
                searchvalue : name
            });
        }
    };
};

const SearchNav = (props) => {
    return(
        <input id="nav-search" className= "nav-searchbar" type = "text" placeholder = "Search for a recipe" value={props.searchvalue} 
        onChange={(e) => props.setSearchValue(e.target.value)}/>
    )
}

const ConnectSearchNav = connect(mapStateToProps, mapDispatchToProps)(SearchNav);


export default ConnectSearchNav;