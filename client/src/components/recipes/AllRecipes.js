import React from "react";
import RecipeListAll from "./RecipeListAll";

function AllRecipes({recipes}){

    const allMyRecipes = recipes.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }).map( recipe => {

        return (
            <RecipeListAll key={recipe.id} recipe={recipe}/>
        )
    })


    return (
        <div className="profile">
            <div className="container">
                <h1>All Recipes</h1>
                {allMyRecipes}
            </div>
        </div>
    )

}

export default AllRecipes;