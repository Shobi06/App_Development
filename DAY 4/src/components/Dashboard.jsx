import React from 'react';
import '../assests/Dashboard.css'; // Import your CSS file for styling
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';

function HomeMadeCrafts() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Hello';

  const handleLogout = () => {
    // Add your logout logic here
    // For example, you can clear user authentication and redirect to the login page.
  };

  return (
    <div className="craft-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Navigation Header */}
        <header className="nav-header">
          
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </header>

        {/* Header */}
        <header className="header">
          <h1>Welcome {email}</h1>
        </header>

        <div className="craft-card">
          <h2>Craft Categories</h2>
          <p>Explore different craft categories.</p>
          <a href="/categories">View Categories</a>
        </div>

        <div className="craft-card">
          <h2>Featured Crafts</h2>
          <p>Discover our featured homemade crafts.</p>
          <a href="/featured">View Featured Crafts</a>
        </div>

        <div className="craft-card">
          <h2>Create and Sell</h2>
          <p>Share your craft creations and sell them.</p>
          <a href="/create-and-sell">Start Crafting</a>
        </div>

        <footer className="footer">
          <p>&copy; 2023 HomeMadeCrafts</p>
        </footer>
      </main>
    </div>
  );
}

export default HomeMadeCrafts;
