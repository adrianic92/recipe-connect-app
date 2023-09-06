import React from "react";
import { Link, useNavigate } from "react-router-dom";

function RecipeListMy({recipe, recipes, setRecipes, edit}) {
    
    const navigate = useNavigate()
    const link = `/recipes/${recipe.id}`

    function handleEdit(){
        console.log("Edit Button")
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
        <div>
            <h1><Link to={link}>{recipe.name} | {recipe.user.name}</Link></h1>
            
            { !edit ? null: <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
            }
        </div>
    )
}

export default RecipeListMy;
