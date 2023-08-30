import React, {useState} from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

function LogIn({setUser}) {

    const [signUp, setSignUp] = useState(false)

    return (
        <div>
            { !signUp ? 
            <LogInForm setSignUp={setSignUp} setUser={setUser}/> :
            <SignUpForm setSignUp={setSignUp} />}
        </div>
    )
}

export default LogIn;