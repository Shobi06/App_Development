import React, { useState } from 'react';
import '../assests/css/Home.css'; // Import your CSS file for styling
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const [showCategories, setShowCategories] = useState(false);

  // Define an array of homemade craft categories
  const craftCategories = [
    'Paper Crafts',
    'Textile and Fabric Crafts',
    'Jewelry Making',
    'Woodworking',
    'Ceramics and Pottery',
    'Glass Crafts',
    'Candle Making',
    'Soap Making',
    'Home Decor',
    'Food and Baking',
    'Leatherworking',
    'Upcycling and Repurposing',
    'Mixed Media Art',
    'Beaded Crafts',
    'Metal Crafts',
    'DIY Home Improvement',
  ];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="home-page-container">
        <header className="home-page-header">
          <h1 className="home-page-title">Welcome to HomeMade Crafts</h1>
          <p className="home-page-description">Explore and create beautiful homemade crafts.</p>
        </header>

        {/* <div className="home-page-search-bar">
          <input type="text" className="home-page-input" placeholder="Search crafts..." />
          <button className="home-page-button">Search</button> */}
        {/* </div> */}
        
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
