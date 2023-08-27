import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";

function LogInForm({setNewUser}) {

    const {setUser} = useContext(UserContext);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errorMessages, setErrorMessages] = useState([])

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData, 
            [name]: value,
        })
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then( response => {
            if (response.ok) {
                response.json()
                .then( user => {
                    setUser(user)
                    console.log(user)
                })
            } else {
                response.json()
                .then( error => setErrorMessages(error.errors))
            }
        })
    }

    const errorList = errorMessages.map( message => {
        return (
            <p key={message}>{message}</p>
        )
    })

    return (
        <div>
            <h1>Log In Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" autoComplete="username" name="username" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" autoComplete="password" name="password" onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {errorList}
            <button onClick={() => setNewUser(true)}>Sign Up!</button>
        </div>
    )
}

export default LogInForm;