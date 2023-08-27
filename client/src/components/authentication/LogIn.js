import React, {useState} from "react";
import LogInForm from "./LogInForm";
import SignInForm from "./SignUpForm";

function LogIn({setUser}) {

    const [newUser, setNewUser] = useState(false)

    return (
        <div>
            { !newUser ? 
            <LogInForm setNewUser={setNewUser} setUser={setUser}/> :
            <SignInForm setNewUser={setNewUser} />}
        </div>
    )
}

export default LogIn;