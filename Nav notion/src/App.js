import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {Route,Routes} from  "react-router-dom"
import Privateroute from "./components/Privateroute"

function App() {
const[isloggin,setloggin]=useState(false);

  return( <div className="w-screen h-screen bg-richblack-900 flex flex-col">
  <Navbar isloggin={isloggin} setloggin={setloggin}></Navbar>
  <Routes>
    <Route path='/' to element={<Home></Home>}></Route>
    <Route path='/login' to element={<Login  setloggin={setloggin}
></Login>}></Route>
    <Route path='/signup' to element={<Signup setloggin={setloggin}></Signup>}></Route>
    <Route path='/dashboard' to element={
     <Privateroute isloggin={isloggin}><Dashboard></Dashboard></Privateroute> }></Route>

  </Routes>

  </div>);
}

export default App;
