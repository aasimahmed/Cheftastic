export const NAV_SEARCHVALUE_UPDATE = "NAV_SEARCHVALUE_UPDATE";

export function updateNavSearchValue(searchvalue){
    return{
        type : NAV_SEARCHVALUE_UPDATE,
        searchvalue
    }
}