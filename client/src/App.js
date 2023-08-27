import React, {useEffect, useState} from 'react';
import LogIn from './components/authentication/LogIn';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me")
    .then( resp => {
      if (resp.ok) {
        resp.json()
        .then((user) => setUser(user))
      }
    })
  }, []);
  return (
    <div>
      <h1>Hello World!</h1>
      <LogIn />
    </div>
  );
}

export default App;
