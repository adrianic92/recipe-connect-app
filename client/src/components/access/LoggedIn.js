import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../context/User";
import NavBar from "../main/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "../user/Profile";
import Home from "../main/Home";
import EditBio from "../user/EditBio";
import EditImage from "../user/EditImage";
import UserRecipes from "../recipes/UserRecipes";
import AllRecipes from "../recipes/AllRecipes";
import SelectedRecipe from "../recipes/SelectedRecipe";
import CreateRecipe from "../recipes/CreateRecipe";
import EditRecipe from "../recipes/EditRecipe";

function LoggedIn() {

    const {user} = useContext(UserContext)
    const [recipes, setRecipes] = useState([])

    if (!recipes) {
        <h1>Loading...</h1>
    }

    useEffect(()=> {
        fetch("/recipes")
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then( data => setRecipes(data) )
            } else {
                resp.json()
                .then( errors => console.log(errors))
            }
        })
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
                <Route exact path="/myrecipes" element={<UserRecipes recipes={myRecipes} setRecipes={setRecipes}/>} />
                <Route exact path="/recipes" element={<AllRecipes recipes={recipes}/>} />
                <Route exact path="/recipes/:id" element={<SelectedRecipe recipes={recipes} setRecipes={setRecipes}/>} />
                <Route exact path="/recipes/new" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes}/>} />
                <Route exact path="/myrecipes/edit/:id" element={<EditRecipe recipes={recipes} setRecipes={setRecipes}/>} />
            </Routes>
        </div>
    )
}

export default LoggedIn;