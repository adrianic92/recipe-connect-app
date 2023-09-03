import React from "react";
import { useParams } from "react-router-dom";

function SelectedRecipe({recipes}) {
    const {id} = useParams()
    const recipe = recipes.find(recipe => parseInt(id) === recipe.id)
    if (!recipe) {
        return <h1>Loading...</h1>
    }
    console.log(recipe)

    return(
        <div>
            <h1>{recipe.name}</h1>
            <h2>{recipe.ingredients}</h2>
            <h2>{recipe.directions}</h2>
        </div>
    )
}

export default SelectedRecipe;