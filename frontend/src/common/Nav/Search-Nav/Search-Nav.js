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
        setSearchValue: () => {
            const searchvalue = document.getElementById("nav-search").value;
            dispatch({
                type: NAV_SEARCHVALUE_UPDATE,
                searchvalue 
            });
        }
    };
};

const SearchNav = ({searchvalue, setSearchValue}) => {
    return(
        <input id="nav-search" className= "nav-searchbar" type = "text" placeholder = "Search for a recipe" value={searchvalue} 
        onChange={setSearchValue}/>
    )
}

const ConnectSearchNav = connect(mapStateToProps, mapDispatchToProps)(SearchNav);


export default ConnectSearchNav;