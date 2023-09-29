import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../assests/css/Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/Privacy">Privacy Policy</Link>
        <Link to="/Terms">Terms and Conditions</Link>
        <Link to="/FAQ">FAQ</Link>
      </div>
    </div>
  );
};

export default Footer;
