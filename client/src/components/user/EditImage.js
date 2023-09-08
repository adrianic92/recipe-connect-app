import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-dom";

function EditImage(){
    const {setUser} = useContext(UserContext)
    const [errorMessages, setErrorMessages] = useState([])
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
            <div className="editimagecontainer">
                    <form className="editimageform" onSubmit={handleSubmit}>
                        <label className="margin">Profile Image Edit</label>
                        <input 
                        type="file" 
                        onChange={handleChange}
                        accept="image/*"
                        className="file-input"
                        >            
                        </input>
                        {newImage === null ? null : <button className="bioeditbutton" type="submit">Submit</button>}
                    </form>
                    {errorList}
                    <h2>Image Preview:</h2>
                    {newImage? <img alt="new" src={URL.createObjectURL(newImage)}/> : null}
            </div>
        </div>
    )
    }

export default EditImage;