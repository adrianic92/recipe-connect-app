import React from "react";
import { useParams } from "react-router-dom";
import RecipeComment from "./RecipeComment";

function SelectedRecipe({recipes}) {
    const {id} = useParams()
    const recipe = recipes.find(recipe => parseInt(id) === recipe.id)
    if (!recipe) {
        return <h1>Loading...</h1>
    }

    const allComments = recipe.comments.map(comment => {
        return (
            <RecipeComment key={comment.id} comment={comment}/>
        )
    })

    return(
        <div>
            <h1>{recipe.name}</h1>
            <h2>Ingredients</h2>
            <h3>{recipe.ingredients}</h3>
            <h2>Directions</h2>
            <h3>{recipe.directions}</h3>
            <h2>Chef: {recipe.user.name}</h2>
            <h3>Get to know the chef:</h3>
            <p>{recipe.user.bio}</p>
            <h1>Comments:</h1>
            <ul>{allComments}</ul>
        </div>
    )
}

export default SelectedRecipe;