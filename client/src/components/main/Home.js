import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/User";

function Home(){

    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    return(
        <div className="home">
            <div className="welcome">
                <h1>Welcome, {user.name}</h1>
            </div>
            <div className="boxes">
                <div className="box box1" onClick={() => navigate("/profile")}>
                    <h2>Profile</h2>
                </div>
                <div className="box box2" onClick={() => navigate("/myrecipes")}>
                    <h2>My Recipes</h2>
                </div>
                <div className="box box3" onClick={() => navigate("/recipes")}>
                    <h2>All Recipes</h2>
                </div>
                <div className="box box4" onClick={() => navigate("/recipes/new")}>
                    <h2>Create A Recipe</h2>
                </div>

            </div>
        </div>
    )
}

export default Home;