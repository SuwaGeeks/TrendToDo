import './App.css';

import { Login } from "./components/Lgoin";
import { TheHeader } from "./components/TheHeader";
import { Navigation } from "./components/Navigation";
// import { Add_Personal_Task } from './components/Add_Personal_Task';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Login />
      {/* <Add_Personal_Task /> */}
      <Navigation />
    </div>
  );
}

export default App;
