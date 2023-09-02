import React from "react";
import RecipeListAll from "./RecipeListAll";

function AllRecipes({recipes}){

    const allMyRecipes = recipes.map( recipe => {

        return (
            <RecipeListAll key={recipe.id} recipe={recipe}/>
        )
    })


    return (
        <div>
            <h1>All Recipes</h1>
            {allMyRecipes}
        </div>
    )

}

export default AllRecipes;