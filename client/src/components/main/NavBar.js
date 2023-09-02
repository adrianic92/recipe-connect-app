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
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={handleLogout}>Log Out</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/myrecipes'>My Recipes</Link>
                    </li>
                    <li>
                        <Link to='/recipes'>Recipes</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;