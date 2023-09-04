import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-dom";


function EditBio(){
    const {user, setUsers, users, setUser} = useContext(UserContext)
    const [bio, setBio] = useState(user.bio ? user.bio : "")
    const navigate = useNavigate()
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
                    const updatedUsers = users.map( u => {
                        if (parseInt(u.id) === parseInt(data.id)) {
                            return data
                        } 
                        else {return u}
                        })
                            setUsers(updatedUsers)
                            setUser(data)
                            navigate("/profile")
                        })}
            else {
                resp.json()
                .then( errors => console.log(errors) )
            }
            })
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

