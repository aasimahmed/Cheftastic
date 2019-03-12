


export const recipeLocationChecker = (recipe) => {
    switch(recipe){
        case "USER_RECIPES" : 
        return {
            state : user.recipe
        }



        default: return "COULD NOT FIND MAPPED RECIPESET IN STORE"
    }
}