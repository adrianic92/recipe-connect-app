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
            } else {
                resp.json()
                .then( errors => console.log(errors) )
            }
        })
    }, []);

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider};