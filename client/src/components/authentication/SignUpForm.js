import React, {useState, useContext} from "react";
import { yearArray, monthArray, dayArray } from "../algebra/Dates";
import { UserContext } from "../context/User";

function SignInForm({setSignUp}) {
    const { setUser } = useContext(UserContext)
    const [errorMessages, setErrorMessages] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
        date_of_birth: "20230101"
    });

    function handleChange(e) {

        let name;
        let value;

        if (e.target.name === "year") {
            value = e.target.value + formData.date_of_birth.slice(4)
            name = "date_of_birth"
        } else if (e.target.name === "month") {
            value = formData.date_of_birth.slice(0,4) + e.target.value + formData.date_of_birth.slice(6)
            name = "date_of_birth"
        } else if (e.target.name === "day") {
            value = formData.date_of_birth.slice(0,6) + e.target.value
            name = "date_of_birth"
        } else {            
            name = e.target.name;
            value = e.target.value;
        }

        setFormData({
            ...formData, 
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then( response => {
            if (response.ok) {
                response.json()
                .then( data => setUser(data))
            } else {
                response.json()
                .then( error => setErrorMessages(error.errors) )
            }
        })
    }

    function optionMaker(item){
        return (
            <option value={item} key={item}>{item}</option>
        )
    }

    const years = yearArray().map(year => optionMaker(year))
    const months = monthArray().map(month => optionMaker(month))
    const days = dayArray().map(day => optionMaker(day))

    const errorList = errorMessages.map( message => {
        return (
            <p key={message}>{message}</p>
        )
    })

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" autoComplete="name" name="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" autoComplete="username" name="username" value={formData.username} onChange={handleChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" autoComplete="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <div>
                    <label>Password Confirmation:</label>
                    <input type="password" autoComplete="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}/>
                </div>
                <div>
                    <label>Date of Birth (mm/dd/yyyy):</label>
                    <div className="select">
                        <select name="month" onChange={handleChange}>{months}</select>
                        <select name="day" onChange={handleChange}>{days}</select>
                        <select name="year" onChange={handleChange}>{years}</select>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {errorList}
            <button className="signup" onClick={() => setSignUp(false)}>Log In</button>
        </div>
    )
}

export default SignInForm;