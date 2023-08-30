import React from "react";
import NavBar from "../main/NavBar";
import { Route, Switch } from "react-router-dom";
import Profile from "../main/Profile";

function LoggedIn() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <h1>Logged in!</h1>
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
}

export default LoggedIn;