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

const SearchNav = ({searchvalue, setSearchValue, searchData}) => {
    return(
        <div className="nav-searchnav-container">
            <input id="nav-search" className= "nav-searchnav-input" type = "text" placeholder = "Search for a recipe" value={searchvalue} 
            onChange={setSearchValue}
            onKeyPress={(e) =>  {
                if(e.which === 13){
                    searchData();
                }
                return;
            }
        }
            />
            
            <label className="nav-searchnav-icon" htmlFor="nav-search">
            
                <i onClick={searchData} className="fas fa-search fa-2x"></i>

   
            </label>
        </div>
    )
}

const ConnectSearchNav = connect(mapStateToProps, mapDispatchToProps)(SearchNav);


export default ConnectSearchNav;