import React from "react";
import NavBar from "../main/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "../user/Profile";
import Home from "../main/Home"
import EditBio from "../user/EditBio";

function LoggedIn() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/profile/editbio" element={<EditBio/>} />
            </Routes>
        </div>
    )
}

export default LoggedIn;