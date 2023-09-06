import React from "react";
import { useParams } from "react-router-dom";
import RecipeForm from "./RecipeForm";

function EditRecipe({recipes, setRecipes}) {
    const {id} = useParams();
    const recipe = recipes.find( rec => parseInt(id) === parseInt(rec.id))
    

    if (!recipe) { return ( <h1>Recipe Not Found</h1> )}
    else { return ( <RecipeForm recipe={recipe} recipes={recipes} setRecipes={setRecipes}/>)}
}

export default EditRecipe;