import React, {useContext} from "react";
import { UserContext } from "../context/User";
import defaultUser from "../../images/defaultUser.png"

function RecipeComment({comment}) {
    const {users} = useContext(UserContext)
    const user = users.find( u => parseInt(u.id) === parseInt(comment.user_id))

    return (
        <li>
            <div>
            {!user.image ? <img src={defaultUser} alt="Default"/>:<img src={user.image} alt="Profile"/>}
            </div>
            <div>
                <h4>{user.name}</h4>
                <p>{comment.description}</p>
            </div>
        </li>
    )
}

export default RecipeComment;