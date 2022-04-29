import './App.css';
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { MainBlock } from "./components/MainBlock/MainBlock"
import { useState } from 'react';

function App() {
  useState();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='App'>
      {isLoggedIn ?
        <MainBlock setIsLoggedIn={setIsLoggedIn} />
        : <LoginPage setIsLoggedIn={setIsLoggedIn} /> }
    </div>
  );
}

export default App;
