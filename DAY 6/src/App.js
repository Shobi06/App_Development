import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ProductDisplay from "./components/ProductDisplay";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Feedback from "./components/Feedback";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Tracking from "./components/Tracking";
import HomeMadeCraftsGraph from "./components/Graph";


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/CraftDashboard" element={<Dashboard/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/product" element={<ProductDisplay/>}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/Sidebar" element={<Sidebar/>}/>
        <Route path="/Header" element={<Header/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Tracking" element={<Tracking/>}/>
        <Route path="/Graph"  element={<HomeMadeCraftsGraph/>}>

        </Route>
        
        
        
      </Routes>
    </Router>
  );
}

export default App;