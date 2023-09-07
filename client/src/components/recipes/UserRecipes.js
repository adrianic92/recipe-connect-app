import React, {useState} from "react";
import RecipeListMy from "./RecipeListMy";

function UserRecipes({recipes, setRecipes}){
    const [edit, setEdit] = useState(false)
    const allMyRecipes = recipes.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }).map( recipe => {

        return (
            <RecipeListMy key={recipe.id} recipe={recipe} edit={edit} recipes={recipes} setRecipes={setRecipes}/>
        )
    });

    function handleClick() {
        setEdit(edit => !edit)
    }

    return (
        <div className="profile">
            <div className="container">
                <h1>User Recipes</h1>
                <button onClick={handleClick}>{!edit? "Edit Mode" : "Cancel Edit Mode"}</button>
                <div className="recipelist">
                    {allMyRecipes}
                </div>
            </div>
        </div>
    )

}

export default UserRecipes