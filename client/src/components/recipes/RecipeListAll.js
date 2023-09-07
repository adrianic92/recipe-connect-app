import React from "react";
import { Link } from "react-router-dom";

function RecipeListAll({recipe}) {
    
    const link = `/recipes/${recipe.id}`

    return(
        <div>
            <h2><Link className="recipelinks" to={link}>{recipe.name} | {recipe.user.name}</Link></h2>
        </div>
    )
}

export default RecipeListAll
