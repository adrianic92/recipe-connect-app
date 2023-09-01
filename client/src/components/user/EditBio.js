import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";


function EditBio(){
    const {user} = useContext(UserContext)
    const [bio, setBio] = useState(user.bio)

    function handleChange(e) {
        setBio(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Edit Your Bio Here</label>
                    <input type="text" value={bio} onChange={handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditBio;

