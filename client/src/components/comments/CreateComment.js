import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";

function CreateComment({recipe, recipes, setRecipes}) {
    const {user} = useContext(UserContext)
    const [newComment, setNewComment] = useState("")
    const [errorMessages, setErrorMessages] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            description: newComment,
            recipe_id: recipe.id,
            user_id: user.id
        }
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( response => {
            if (response.ok) {
                response.json()
                .then( data => {
                    const updatedRecipes = recipes.map( rec => {
                        if (parseInt(rec.id) === parseInt(parseInt(data.recipe_id))) {
                            console.log(rec)
                            const updatedRecipe = Object.assign({}, rec)
                            updatedRecipe.comments.push(data)
                            return updatedRecipe
                        }
                        else {
                            return rec
                        }
                    })
                    setRecipes(updatedRecipes)
                    setNewComment("")
                })
            } else {
                response.json()
                .then( error => setErrorMessages(error.errors) )
            }
        })
    }

    function handleChange(e) {
        setNewComment(e.target.value)
    }

    const errorList = errorMessages.map( message => {
        return (
            <p key={message}>{message}</p>
        )
    })

    return (
        <div className="new-comment">
            <h1>Insert Comment Here:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <textarea name="description" value={newComment} onChange={handleChange}></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
            {errorList}
        </div>
    )
}

export default CreateComment;