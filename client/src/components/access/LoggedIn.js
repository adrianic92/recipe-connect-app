import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../context/User";
import NavBar from "../main/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "../user/Profile";
import Home from "../main/Home"
import EditBio from "../user/EditBio";
import EditImage from "../user/EditImage";
import UserRecipes from "../recipes/UserRecipes";
import AllRecipes from "../recipes/AllRecipes";
import SelectedRecipe from "../recipes/SelectedRecipe";
import CreateRecipe from "../recipes/CreateRecipe";

function LoggedIn() {

    const {user} = useContext(UserContext)
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        fetch("/recipes")
        .then( resp => resp.json())
        .then( data => setRecipes(data))
    }, [user])

    const myRecipes = recipes.filter(recipe => parseInt(recipe.user_id) === parseInt(user.id))
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/profile/editbio" element={<EditBio />} />
                <Route exact path="/profile/editimage" element={<EditImage />} />
                <Route exact path="/myrecipes" element={<UserRecipes recipes={myRecipes}/>} />
                <Route exact path="/recipes" element={<AllRecipes recipes={recipes}/>} />
                <Route exact path="/recipes/:id" element={<SelectedRecipe recipes={recipes}/>} />
                <Route exact path="/recipes/new" element={<CreateRecipe />} />
            </Routes>
        </div>
    )
}

export default LoggedIn;