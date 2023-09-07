import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { UserContext } from "../context/User";

function NavBar() {
    const {user, setUser} = useContext(UserContext)

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
        <div className="nav">
            <div>
                <h1 className="title">Recipe Connect</h1>
            </div>
            <div>
                <ul className="list">
                    <li>
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="link" to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link className="link" to='/myrecipes'>My Recipes</Link>
                    </li>
                    <li>
                        <Link className="link" to='/recipes'>Recipes</Link>
                    </li>
                    <li>
                        <Link className="link" to='/recipes/new'>Create Recipe</Link>
                    </li>
                    <li>
                        <Link className="link" to='/' onClick={handleLogout}>Log Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;