import React from 'react';
// import CraftCategoryList from './CraftCategoryList'; // Assuming you already have a CraftCategoryList component
import '../assests/css/Home.css'; 
import CraftCategoryList from './Categories';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to HomeMade Crafts</h1>
        <p>Explore and create beautiful homemade crafts.</p>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search crafts..." />
        <button>Search</button>
      </div>

      <section className="craft-categories">
        <h2>Popular Craft Categories</h2>
        <CraftCategoryList />
      </section>
    </div>
  );
};

export default HomePage;
