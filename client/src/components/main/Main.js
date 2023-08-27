import React, {useContext} from "react";
import { UserContext } from "../context/User";
import LogIn from "../authentication/LogIn";


function Main() {

    const user = useContext(UserContext);

    if (!user) {
        return (
            <LogIn />
        )
    } else { 
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }

    
}

export default Main