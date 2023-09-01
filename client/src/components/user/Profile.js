import React, {useContext} from "react";
import { UserContext } from "../context/User";
import defaultUser from "../../images/defaultUser.png"
import { ageFinder } from "../algebra/Dates";
import { useNavigate } from "react-router-dom";

function Profile(){
    const { user } = useContext(UserContext)
    const navigate = useNavigate();

    function handleBioClick() {
        navigate("/profile/editbio");
    }

    function handleImageClick() {
        navigate("/profile/editimage");
    }

    return(
        <div>
            <div>
                <h1>{user.name}</h1>
            </div>
            <div>
                <div>{!user.image ? <img src={defaultUser} alt="Default" onClick={handleImageClick}/>:<img src={user.image} alt="Profile" onClick={handleImageClick}/>}</div>
                <h3>{ageFinder(user.date_of_birth)} Years Old</h3>
            </div>
            <div>
                <h3>Bio:</h3>
                {!user.bio ? <p>Tell the world who you are! </p> : user.bio}
            </div>
            <div>
                <button onClick={handleBioClick}>Edit your Bio</button>
            </div>
        </div>
    )
}

export default Profile