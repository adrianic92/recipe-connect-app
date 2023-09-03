import React from "react";
import { Link } from "react-router-dom";

function RecipeListAll({recipe}) {

    console.log(recipe)
    const link = `/recipes/${recipe.id}`

    return(
        <div>
            <h1><Link to={link}>{recipe.name} | {recipe.user.name}</Link></h1>
        </div>
    )
}

export default RecipeListAll
