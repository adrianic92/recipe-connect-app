import React from "react";

function SignInForm({setNewUser}) {
    return (
        <div>
            <h1>Sign In Form</h1>
            <button onClick={() => setNewUser(false)}>Log In</button>
        </div>
    )
}

export default SignInForm;