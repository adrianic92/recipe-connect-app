import React, {useContext} from "react";
import { UserContext } from "../context/User";

function Profile(){

    const { user } = useContext(UserContext)

    return(
        <div>
            <h1>{user.name}</h1>
            {!user.image ? <h1>No Image</h1>:<h1>Image</h1>}
        </div>
    )
}

export default Profile