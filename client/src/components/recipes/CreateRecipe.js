import React, {useState, useEffect} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router-dom";

function CreateRecipe({recipes, setRecipes}) {

    const [allTags, setAllTags] = useState([])
    const animatedComponents = makeAnimated();
    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        directions: "",
        tags: [],
    })
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState([])

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData, 
            [name]: value,
        })
    }

    function handleTagChange(e) {
        const arr = e.map( item => item.value)
        setFormData({...formData, tags: arr})
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then(data => {
                    setRecipes([...recipes, data])
                    navigate(`/recipes/${data.id}`)
                })
            }
            else {
                resp.json()
                .then( error => setErrorMessages(error.errors))
            }
        })
        
    }

    useEffect( () => {
        fetch("/tags")
        .then( resp => resp.json())
        .then( data => setAllTags(data))
    }, [])

    const tagArray = allTags.map( tag => {
        const obj = {}
        obj.value = tag.name
        obj.label = tag.name
        return obj
    })

    const errorList = errorMessages.map( message => {
        return (
            <p key={message}>{message}</p>
        )
    })

    return (
        <div className="profile">
            <div className="create-recipe-container">
                <h1>Create a Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <label>Recipe Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    <label>Ingredients:</label>
                    <textarea name="ingredients" value={formData.ingredients} onChange={handleChange}/>
                    <label>Directions:</label>
                    <textarea name="directions" value={formData.directions} onChange={handleChange} />
                    <label>Tags:</label>
                    <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={tagArray}
                            default={formData.tags}
                            onChange={handleTagChange}
                        />
                    <button type="submit">Submit</button>
                </form>
                {errorList}
            </div>
        </div>
    )
}

export default CreateRecipe;