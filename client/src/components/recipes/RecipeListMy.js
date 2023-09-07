import React from "react";
import { Link, useNavigate } from "react-router-dom";

function RecipeListMy({recipe, recipes, setRecipes, edit}) {
    
    const navigate = useNavigate()
    const link = `/recipes/${recipe.id}`

    function handleEdit(){
        navigate(`/myrecipes/edit/${recipe.id}`)
    }
    
    function handleDelete(){
        fetch(`recipes/${recipe.id}`, {
            method: "DELETE"
        })
        .then(() => {
            const filteredRecipes = recipes.filter( rec => rec.id !== recipe.id)
            setRecipes(filteredRecipes)
        })
    }

    return(
        <div className={ edit? null:"eachrecipe"}>
            <h2><Link className="recipelinks" to={link}>{recipe.name} | {recipe.user.name}</Link></h2>
            { edit ? null: <div className="editbuttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
            }
        </div>
    )
}

export default RecipeListMy;
