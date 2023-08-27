import React, {useState} from "react";
import LogInForm from "./LogInForm";
import SignInForm from "./SignUpForm";

function LogIn() {

    const [newUser, setNewUser] = useState(false)

    return (
        <div>
            { !newUser ? 
            <LogInForm setNewUser={setNewUser} /> :
            <SignInForm setNewUser={setNewUser} />}
        </div>
    )
}

export default LogIn;