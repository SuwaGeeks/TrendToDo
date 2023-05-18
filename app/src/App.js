import React, { useState } from 'react';
import './App.css';
import { Login } from "./components/Lgoin";
import { TheHeader } from "./components/TheHeader";
import { Navigation } from "./components/Navigation";
// import { Add_Personal_Task } from './components/Add_Personal_Task';
import { TaskList } from './components/TaskList'; 

function App() {

  // ログイン状態
  const [isLogined, setValue] = useState(false);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };


  if(!isLogined){
    // ログインしていない状態
    return (
      <div className="App">
        <TheHeader />
        <Login handleValueChange={handleValueChange} />
      </div>
    );
  }else{
    // ログイン状態
    return(
      <div className="App">
        <TheHeader />
        <TaskList  tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} />
        {/* <Add_Personal_Task /> */}
        <Navigation />
      </div>
    );
    
  }

}

export default App;
