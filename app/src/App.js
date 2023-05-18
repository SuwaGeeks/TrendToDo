import React, { useState } from 'react';
import './App.css';
import { Login } from "./components/Lgoin";
import { TheHeader } from "./components/TheHeader";
import { Home } from "./components/Home";

function App() {

  // ログイン状態
  const [isLogined, setValue] = useState(false);


  if(!isLogined){
    // ログインしていない状態
    return (
      <div className="App">
        <TheHeader />
        <Login handleValueChange={ (newValue)=>{setValue(newValue)} } />
      </div>
    );
  }else{
    // ログイン状態
    return(
      <div className="App">
        <TheHeader />
        <Home />
      </div>
    );
    
  }

}

export default App;
