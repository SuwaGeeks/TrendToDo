import './App.css';

import { Login } from "./components/Lgoin";
import { TheHeader } from "./components/TheHeader";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Login />
      <Navigation />
    </div>
  );
}

export default App;
