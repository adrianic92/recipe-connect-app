import React, {useState} from "react";
import { yearArray, monthArray, dayArray } from "../algebra/Dates";

function SignInForm({setNewUser}) {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
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
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    function optionMaker(item){
        return (
            <option value={item} key={item}>{item}</option>
        )
    }

    const years = yearArray().map(year => optionMaker(year))
    const months = monthArray().map(month => optionMaker(month))
    const days = dayArray().map(day => optionMaker(day))

    return (
        <div>
            <h1>Sign In Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" autoComplete="name" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" autoComplete="username" name="username" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" autoComplete="password" name="password" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password Confirmation:</label>
                    <input type="password" autoComplete="password" name="passwordConfirmation" onChange={handleChange}/>
                </div>
                <div>
                    <label>Date of Birth (mm/dd/yyyy):</label>
                    <select name="month" onChange={handleChange}>{months}</select>
                    <select name="day" onChange={handleChange}>{days}</select>
                    <select name="year" onChange={handleChange}>{years}</select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <button onClick={() => setNewUser(false)}>Log In</button>
        </div>
    )
}

export default SignInForm;