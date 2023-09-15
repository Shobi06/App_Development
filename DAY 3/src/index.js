import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignUp from './components/signup';
import Login from './components/login';
import ForgotPassword from './components/ForgotPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
);

reportWebVitals();
