import { LOAD_MEALS } from "../actions/action-functions";
import { NAV_SEARCHVALUE_UPDATE } from "../actions/action-functions";
import { SET_CURRENT_MEAL } from "../actions/action-functions";


export const initialState = {
    searchvalue : ""
}

function rootReducer(state = initialState, action){
    switch(action.type){
        
        case LOAD_MEALS:
        let copyStateMeals = {...state}
            console.log(action.meals, copyStateMeals)
        return { //ACTION DISPATCHED WILL INCLUDE ACTION.MEALS.
                ...copyStateMeals,
                meals: action.meals
        }
        case SET_CURRENT_MEAL:
            console.log(action.id) //ACTION ID pull data from meals.
            let copyCurrentRecipe = {...state};
            const filteredCurrentRecipe = copyCurrentRecipe.meals.filter(val => {
                return val.id === action.id;
            })
            console.log(filteredCurrentRecipe[0])
            return{
                ...copyCurrentRecipe,
                currentRecipe : filteredCurrentRecipe[0]
            }

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