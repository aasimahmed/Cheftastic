export const NAV_SEARCHVALUE_UPDATE = "NAV_SEARCHVALUE_UPDATE";

export const LOAD_MEALS = "LOAD_MEALS";

export const SET_CURRENT_MEAL = "SET_CURRENT_MEAL";

export const SEARCH_MEALS_RESULTS = "SEARCH_MEALS_RESULTS";

export const SLIDER_SCROLLER = "SLIDER_SCROLLER"

export const SET_SELECTED_RECIPE = "SET_SELECTED_RECIPE";

export function updateNavSearchValue(searchvalue){
    return{
        type : NAV_SEARCHVALUE_UPDATE,
        searchvalue
    }
}