export const NAV_SEARCHVALUE_UPDATE = "NAV_SEARCHVALUE_UPDATE";

export const LOAD_MEALS = "LOAD_MEALS";

export const SET_CURRENT_MEAL = "SET_CURRENT_MEAL";

export function updateNavSearchValue(searchvalue){
    return{
        type : NAV_SEARCHVALUE_UPDATE,
        searchvalue
    }
}