import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { UserContext } from "../context/User";

function NavBar() {
    const {setUser} = useContext(UserContext)

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                setUser(null);
            }
        })
    }

    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to='/' onClick={handleLogout}>Log Out</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;