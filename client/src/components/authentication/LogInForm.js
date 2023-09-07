import React, {useState, useContext} from "react";
import { UserContext } from "../context/User";

function LogInForm({setSignUp}) {

    const {setUser} = useContext(UserContext);
    const [errorMessages, setErrorMessages] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData, 
            [name]: value,
        })
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
        <div className="container">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" autoComplete="username" name="username" value={formData.username} onChange={handleChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" autoComplete="password" name="password" value={formData.password}  onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {errorList}
            <button className="signup" onClick={() => setSignUp(true)}>Sign Up!</button>
        </div>
    )
}

export default LogInForm;