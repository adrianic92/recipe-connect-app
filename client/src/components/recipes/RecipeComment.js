import React, {useContext} from "react";
import defaultUser from "../../images/defaultUser.png"
import { UserContext } from "../context/User";

function RecipeComment({comment, recipe, recipes, setRecipes}) {
    const {user} = useContext(UserContext)

    function handleClick() {
        fetch(`/comments/${comment.id}`, {
            method: "DELETE"
        })
        .then( () => {
            const updatedRecipes = recipes.map( rec => {
                if ( parseInt(rec.id) === parseInt(recipe.id) ) {
                    const updatedRec = Object.assign({}, rec)
                    const updatedComments = updatedRec.comments.filter( com => com.id !== comment.id )
                    updatedRec.comments = updatedComments
                    return updatedRec
                } else {
                    return rec
                }
            })
            setRecipes(updatedRecipes)
        })
    }


    return (
        <li className="each-comment">
            <div className="comment-image-container">
            {!comment.user_image ? <img src={defaultUser} alt="Default"/>:<img src={comment.user_image} alt="Profile"/>}
            </div>
            <div>
                <h4>{comment.user_name}</h4>
                <p>{comment.description}</p>
                { user.id === comment.user_id ? <button onClick={handleClick}>Delete</button> : null}
            </div>
        </li>
    )
}

export default RecipeComment;