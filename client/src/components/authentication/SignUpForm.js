import React, {useState} from "react";

function SignInForm({setNewUser}) {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
    });

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData, 
            [name]: value,
        })
        console.log(formData)
    }

    return (
        <div>
            <h1>Sign In Form</h1>
            <form>
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
                    <button type="submit">Submit</button>
                </div>
            </form>
            <button onClick={() => setNewUser(false)}>Log In</button>
        </div>
    )
}

export default SignInForm;