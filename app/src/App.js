import React, { useState } from 'react';
import './App.css';
import { Login } from "./components/Login/Lgoin";
import { TheHeader } from "./components/TheHeader";
import { Home } from "./components/Home";

function App() {

  // ログイン状態
  const [isLogined, setLoginState] = useState(false);

  if(!isLogined){
    // ログインしていない状態
    return (
      <div className="App">
        <TheHeader handleValueChange={ setLoginState } />
        <Login handleValueChange={ setLoginState } />
      </div>
    );
  }else{
    // ログイン状態
    return(
      <div className="App">
        <TheHeader TheHeader handleValueChange={ setLoginState } />
        <Home />
      </div>
    );
    
  }

}

export default App;
