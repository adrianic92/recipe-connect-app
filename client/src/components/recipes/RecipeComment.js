import React from "react";
import defaultUser from "../../images/defaultUser.png"

function RecipeComment({comment, recipe, recipes, setRecipes}) {
    console.log(comment)

    return (
        <li>
            <div>
            {!comment.user_image ? <img src={defaultUser} alt="Default"/>:<img src={comment.user_image} alt="Profile"/>}
            </div>
            <div>
                <h4>{comment.user_name}</h4>
                <p>{comment.description}</p>
            </div>
        </li>
    )
}

export default RecipeComment;