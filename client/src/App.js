import React, {useEffect, useState} from 'react';

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
    </div>
  );
}

export default App;
