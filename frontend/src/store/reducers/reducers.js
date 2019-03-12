import { LOAD_MEALS } from "../actions/action-functions";
import { NAV_SEARCHVALUE_UPDATE } from "../actions/action-functions";
import { SET_CURRENT_MEAL } from "../actions/action-functions";
import { SEARCH_MEALS_RESULTS } from "../actions/action-functions";
import { SLIDER_SCROLLER } from "../actions/action-functions";
import { SET_SELECTED_RECIPE } from "../actions/action-functions";

// import { recipeLocationChecker } from "../../store/store-recipe-map/store-recipe-map";

export const initialState = {
    searchvalue : "",
    searchresults: {
        
    },
    user : {
        recipes : {
         userrecipes : [
                {
            id: "52966",
            image: "https://www.themealdb.com/images/media/meals/1550442508.jpg",
            imageText: "Sweet,Snack,Treat",
            link: "http://www.donalskehan.com/recipes/chocolate-caramel-rice-crispy-treats/",
            title: "Chocolate Caramel Crispy",
            youtube: "https://www.youtube.com/watch?v=qsk_At_gjv0"
            },
                {
            id: "52966",
            image: "https://www.themealdb.com/images/media/meals/1550442508.jpg",
            imageText: "Sweet,Snack,Treat",
            link: "http://www.donalskehan.com/recipes/chocolate-caramel-rice-crispy-treats/",
            title: "Chocolate Caramel Crispy",
            youtube: "https://www.youtube.com/watch?v=qsk_At_gjv0"},
            {
            id: "52965",
            image: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
            imageText: "Breakfast,Brunch",
            link: "http://www.vodkaandbiscuits.com/2014/03/06/bangin-breakfast-potatoes/",
            title: "Breakfast Potatoes",
            youtube: "https://www.youtube.com/watch?v=BoD0TIO9nE4"
            }
            ],
            breakfast : []
            },
        selectedRecipe: {
            title: "Drop something here!",
            image : "https://bostontattoo.com/wp-content/uploads/boston-tattoo-placement-image.jpg"
        }
         
        }

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
                currentRecipe : filteredCurrentRecipe[0],
                searchresults : {
                    title : undefined
                }
            };

        case NAV_SEARCHVALUE_UPDATE:
            let copyState = {...state};
            
            return{
                ...copyState,
                searchvalue : action.searchvalue 
                };


        case SEARCH_MEALS_RESULTS:
            let copyStateSearch = {...state};
            console.log(action.searchresults)
            return {
                ...copyStateSearch,
                searchresults : action.searchresults,
                currentRecipe : null
            }
        case SLIDER_SCROLLER:
            let copyStateSlider = {...state};

            const selectedArr = [...action.recipe]; //Copy recipe arr passed.

            console.log(selectedArr)
            if(action.direction === "left"){ 
                let firstPop = selectedArr.shift()
                selectedArr.push(firstPop)  
             
            
            }else{         //Direction is right
                let endPop = selectedArr.pop();
                selectedArr.unshift(endPop);

            }
            

            // recipe,
            // name: "user"
           
        return {
            ...copyStateSlider,
            user : {
                ...copyStateSlider.user,
                recipes : {
                    ...copyStateSlider.recipes,
                    [action.name] : selectedArr
                }
            }

        }

        case SET_SELECTED_RECIPE:
            let copyStateSelectedRecipe = {...state};
            return{
                ...copyStateSelectedRecipe,
                user : {
                    ...copyStateSelectedRecipe.user,
                    selectedRecipe : action.data
                }
            }

 
        

        default: 
            return state;
    }
}


export default rootReducer;