import { NAV_SEARCHVALUE_UPDATE } from "../actions/action-types"

const initialState = {
    search_value : ""
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