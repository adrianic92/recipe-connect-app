import React, {useContext} from "react";
import { UserContext } from "../context/User";
import LogIn from "../authentication/LogIn";
import LoggedIn from "../access/LoggedIn";


function Main() {

    const {user} = useContext(UserContext);
    console.log(user)

    if (!user) {
        return (
            <LogIn />
        )
    } else { 
        return (
            <div>
                <LoggedIn />
            </div>
        )
    }

    
}

export default Main