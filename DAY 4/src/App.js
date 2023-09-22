import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import HomeMadeCrafts from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/CraftDashboard" element={<HomeMadeCrafts/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;