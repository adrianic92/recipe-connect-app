import React from "react";

function LogInForm({setNewUser}) {
    return (
        <div>
            <h1>Log In Form</h1>
            <button onClick={() => setNewUser(true)}>Sign Up!</button>
        </div>
    )
}

export default LogInForm;