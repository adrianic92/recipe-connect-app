import React, {useState} from "react";
import RecipeListMy from "./RecipeListMy";

function UserRecipes({recipes, setRecipes}){
    const [edit, setEdit] = useState(false)
    const allMyRecipes = recipes.map( recipe => {

        return (
            <RecipeListMy key={recipe.id} recipe={recipe} edit={edit} recipes={recipes} setRecipes={setRecipes}/>
        )
    })

    function handleClick() {
        setEdit(edit => !edit)
    }

    return (
        <div>
            <h1>User Recipes</h1>
            <button onClick={handleClick}>Edit Mode</button>
            <div>
                {allMyRecipes}
            </div>
        </div>
    )

}

export default UserRecipes