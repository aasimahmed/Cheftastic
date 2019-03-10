import React from "react";

//take in an arr
//map over each individual array object 
//return a parsed object  - for each
export const mealsdbparser = arr => {
    return arr.map(val => {
        return {
            id : val.idMeal,
            title: val.strMeal,
            description : val.strInstructions,
            image : val.strMealThumb,
            imageText : val.strTags,
            link : val.strSource,
            youtube : val.strYoutube,
            ingredients : [
              {[val.strIngredient1] : val.strMeasure1},
              {[val.strIngredient2] : val.strMeasure2},
              {[val.strIngredient3] : val.strMeasure3},
              {[val.strIngredient4] : val.strMeasure4},
              {[val.strIngredient5] : val.strMeasure5},
              {[val.strIngredient6] : val.strMeasure6},
              {[val.strIngredient7] : val.strMeasure7},
              {[val.strIngredient8] : val.strMeasure8},
              {[val.strIngredient9] : val.strMeasure9},
              {[val.strIngredient10] : val.strMeasure10},
              {[val.strIngredient11] : val.strMeasure11},
              {[val.strIngredient12] : val.strMeasure12},
              {[val.strIngredient13] : val.strMeasure13},
              {[val.strIngredient14] : val.strMeasure14},
              {[val.strIngredient15] : val.strMeasure15},
              {[val.strIngredient16] : val.strMeasure16},
              {[val.strIngredient17] : val.strMeasure17},
              {[val.strIngredient18] : val.strMeasure18},
              {[val.strIngredient19] : val.strMeasure19},
              {[val.strIngredient20] : val.strMeasure20}
            ]
    }})
}
    //HAVE ACCESS TO strIngredient - need to check its not an empty string
   
        