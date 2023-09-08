import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function RecipeForm({recipe, recipes, setRecipes}) {

    const [formData, setFormData] = useState({
        name: recipe.name,
        ingredients: recipe.ingredients,
        directions: recipe.directions
    });
    const [errorMessages, setErrorMessages] = useState([])
    const navigate = useNavigate()
    
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData, 
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then( data => {
                    const updatedRecipes = recipes.map( rec => {
                        if ( parseInt(rec.id) === parseInt(data.id) ) {
                            return data
                        } else { return rec }
                    })
                    setRecipes(updatedRecipes)
                    navigate(`/recipes/${recipe.id}`)
                })

            } else {
                resp.json()
                .then( error => setErrorMessages(error.errors))
            }
        })
    }

    const errorList = errorMessages.map( message => {
        return (
            <p className="error" key={message}>{message}</p>
        )
    })

    return (
        <div className="profile">
            <div className="editrecipecontainer">
                <h1>Edit Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
                    <label>Ingredients:</label>
                    <textarea type="text" name="ingredients" value={formData.ingredients}  onChange={handleChange}></textarea>
                    <label>Directions:</label>
                    <textarea type="text" name="directions" value={formData.directions} onChange={handleChange}></textarea>
                    <button className="recipeeditbutton" type="submit">Submit</button>
                </form>
                {errorList}
                <button className="recipeeditbutton" onClick={() => navigate("/myrecipes")}>Cancel Edit</button>
            </div>
        </div>
    )
}

export default RecipeForm;