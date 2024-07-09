import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
