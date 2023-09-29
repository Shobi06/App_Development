import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import '../assests/css/Dashboard.css'; // Import your CSS file with a unique name for styling
import HomeMadeCraftsGraph from './Graph';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     <Header/>
     <Sidebar/>
     {/* <HomeMadeCraftsGraph/> */}
     <Footer/>
    </div>
  );
};

export default Dashboard;
