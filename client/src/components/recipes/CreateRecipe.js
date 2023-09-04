import React, {useState, useEffect} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated"

function CreateRecipe() {

    const [tags, setTags] = useState([])
    const animatedComponents = makeAnimated();
    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        directions: "",
        tags: []
    })

    useEffect( () => {
        fetch("/tags")
        .then( resp => resp.json())
        .then( data => setTags(data))
    }, [])

    const tagArray = tags.map( tag => {
        const obj = {}
        obj.value = tag.name
        obj.label = tag.name
        return obj
    })

    return (
        <div>
            <div>
                <h1>Create a Recipe</h1>
            </div>
            <div>
                <form>
                    <label>
                        Recipe Name:
                        <input type="text" name="name"></input>
                    </label>
                    <label>
                        Ingredients:
                        <textarea name="ingredients" />
                    </label>
                    <label>
                        Directions:
                        <textarea name="directions" />
                    </label>
                    <label>
                        Tags:
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={tagArray}
                            default={formData.tags}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe;