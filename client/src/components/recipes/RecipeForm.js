import React, {useState} from "react";

function RecipeForm({recipe, recipes, setRecipes}) {

    const [formData, setFormData] = useState({
        name: recipe.name,
        ingredients: recipe.ingredients,
        directions: recipe.directions
    });
    
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
        console.log(formData)
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
                })

            } else {
                resp.json()
                .then( errors => console.log(errors))
            }
        })
    }

    console.log(formData)

    return (
        <div>
            <div>
                <h1>Edit Recipe</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
                    </label>
                    <label>
                        Ingredients:
                        <textarea type="text" name="ingredients" value={formData.ingredients}  onChange={handleChange}></textarea>
                    </label>
                    <label>
                        Directions:
                        <textarea type="text" name="directions" value={formData.directions} onChange={handleChange}></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RecipeForm;