import { NAV_SEARCHVALUE_UPDATE } from "../actions/action-functions"

const initialState = {
    searchvalue : ""
}

function rootReducer(state = initialState, action){
    switch(action.type){

        case NAV_SEARCHVALUE_UPDATE:
            let copyState = {...state};
            
            return{
                ...copyState,
                searchvalue : action.searchvalue 
                }

        default: 
            return state;
    }
}


export default rootReducer;