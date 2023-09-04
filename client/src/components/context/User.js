import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({children}) {

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/me")
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then((data) => setUser(data))
            }
        })
    }, []);

    useEffect(() => {
        fetch("/users")
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then((data) => setUsers(data))
            }
        })
    }, [])

    return <UserContext.Provider value={{user, setUser, users, setUsers}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider};