import React, { useState } from 'react';
import './App.css';
import { Login } from "./components/Lgoin";
import { TheHeader } from "./components/TheHeader";
import { Home } from "./components/Home";
import { TaskList } from './components/TaskList';
import { Navigation } from './components/Navigation';

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
        <TaskList  tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} />
        {/* <Add_Personal_Task /> */}
        <Home />
      </div>
    );
    
  }

}

export default App;
