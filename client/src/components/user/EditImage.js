import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-dom";

function EditImage(){
    const {users, setUser,setUsers} = useContext(UserContext)

    const [newImage, setNewImage] = useState(null)

    const navigate = useNavigate()
    
    function handleChange(e) {
        setNewImage(e.target.files[0])
    }

    function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData();
        formData.append('image', newImage)
        fetch("/user_update", {
            method: "PATCH",
            body: formData
        }
        ).then( resp => {
            if (resp.ok) {
                resp.json().then(data => {
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
                .then( errors => console.log(errors))
            }
        })
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Edit Your Profile Image Here</label>
                    <input 
                    type="file" onChange={handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h2>Image Preview:</h2>
                {newImage? <img alt="new" src={URL.createObjectURL(newImage)}/> : null}
            </div>
        </div>
    )
    }

export default EditImage;