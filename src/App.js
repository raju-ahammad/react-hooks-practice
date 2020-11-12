import React from 'react';
import './App.css';
import CompA from './Context/CompA';

export const UserContext = React.createContext()
export const NewContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'raju'}>
        <NewContext.Provider value={'ahammad'}>
        <CompA/>
        </NewContext.Provider>
      </UserContext.Provider> 
      
    </div>
  );
}

export default App;
