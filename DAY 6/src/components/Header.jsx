import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import '../assests/css/Header.css'; // Import your CSS file for styling


const Header = () => {
   
  
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      {/* <div className="user-section">
        <p>Welcome, {username}!</p>
        </div> */}
      <div className="header-links">
        <Link to="/About">About Us</Link> {/* Use Link component */}
        <Link to="/Contact">Contact</Link> {/* Use Link component */}
        <Link to="/Login">Login</Link> {/* Use Link component */}
        <Link to="/Login">Logout</Link> {/* Use Link component */}
      </div>
    </div>
  );
};

export default Header;
