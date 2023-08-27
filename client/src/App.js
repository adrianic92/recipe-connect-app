import React from 'react';
import { UserProvider } from './components/context/User';
import Main from './components/main/Main';

function App() {
  
  return (
    <UserProvider>
      <div>
        <Main />
      </div>
    </UserProvider>
  );
}

export default App;
