import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <Link to="/home">
          <HomeIcon /> Dashboard
        </Link>
        <Link to="/Tracking">
          <ShoppingCartIcon /> Order Tracking
        </Link>
        {/* <Link to="/CraftDashboard">
          <BarChartIcon /> Dashboard
        </Link> */}
        <Link to="/Profile">
          <PersonIcon /> Profile
        </Link>
        <Link to="/ForgotPassword">
          <LockIcon /> Change Password
        </Link>
        <Link to="/product">
          <ShoppingCartIcon /> Product Display
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
