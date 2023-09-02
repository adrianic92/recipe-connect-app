import React from "react";

function RecipeListAll({recipe}) {

    console.log(recipe)

    return(
        <div>
            <h1>{recipe.name}</h1>
            <h3>Ingredients:<br/>{recipe.ingredients}</h3>
            <h3>Directions:<br/>{recipe.directions}</h3>
        </div>
    )
}

export default RecipeListAll