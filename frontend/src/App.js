import logo from "./logo.svg";
import React from 'react'
import "./App.css";
import KidSection from "./Pages/KidSection";
import Login from './Pages/Login';
import Landingpage from "./Pages/LandingPage";
import Advertise from "./Pages/Advertise";
import Signup from "./Pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/advertise' element={<Advertise/>}/>
          <Route path='/kids' element={<KidSection/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
