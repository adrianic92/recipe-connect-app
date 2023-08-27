import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({children}) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/me")
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then((data) => setUser(data))
            }
        })
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider};