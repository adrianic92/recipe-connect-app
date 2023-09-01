import React from "react";
import NavBar from "../main/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "../user/Profile";
import Home from "../main/Home"
import EditBio from "../user/EditBio";
import EditImage from "../user/EditImage";

function LoggedIn() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/profile/editbio" element={<EditBio/>} />
                <Route exact path="/profile/editimage" element={<EditImage />} />
            </Routes>
        </div>
    )
}

export default LoggedIn;