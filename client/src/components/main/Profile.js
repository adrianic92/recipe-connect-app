import React, {useContext} from "react";
import { UserContext } from "../context/User";
import defaultUser from "../../images/defaultUser.png"
import { ageFinder } from "../algebra/Dates";

function Profile(){
    const { user } = useContext(UserContext)
    

    function handleClick() {

    }

    return(
        <div>
            <h1>{user.name}</h1>
            {!user.image ? <img src={defaultUser} alt="Default Image"/>:<h1>Image</h1>}
            <h3>{ageFinder(user.date_of_birth)} Years Old</h3>
            <h3>Bio:</h3>{!user.bio ? <p>Tell the world who you are! </p> : user.bio}
            <button onClick={handleClick}>Edit your Profile</button>
        </div>
    )
}

export default Profile