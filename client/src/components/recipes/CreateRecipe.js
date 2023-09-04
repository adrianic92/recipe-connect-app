import React, {useState} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated"

function CreateRecipe() {

    const animatedComponents = makeAnimated();

    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        directions: "",
        tags: []
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
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe;