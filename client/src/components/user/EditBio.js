import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-dom";


function EditBio(){
    const {user, setUser} = useContext(UserContext)
    const [bio, setBio] = useState(user.bio ? user.bio : "")
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState([])

    function handleChange(e) {
        setBio(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/user_update", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({bio: bio})
        }
        ).then( resp => {
            if (resp.ok) {
                resp.json()
                .then(data => {
                    setUser(data)
                    navigate("/profile")
                    })}
            else {
                resp.json()
                .then( error => setErrorMessages(error.errors))
            }
            })
        }

    const errorList = errorMessages.map( message => {
        return (
            <p key={message}>{message}</p>
        )
    })

    return(
        <div className="profile">
            <div className="editcontainer">
                <form onSubmit={handleSubmit}>
                    <label>Edit Your Bio Here</label>
                    <textarea type="text" value={bio} onChange={handleChange} />
                    <button className="bioeditbutton" type="submit">Submit</button>
                </form>
                {errorList}
            </div>
        </div>
    )
}

export default EditBio;

