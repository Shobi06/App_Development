import React, { useState } from 'react';
import '../assests/css/Home.css'; // Import your CSS file for styling
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const HomePage = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedChart, setSelectedChart] = useState('bar'); // Initialize with 'bar' chart

  const craftCategories = [
    // ... your categories ...
  ];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const chartData = [
    { name: 'Paper Crafts', value: 15 },
    { name: 'Textile and Fabric Crafts', value: 8 },
    { name: 'Jewelry Making', value: 20 },
    { name: 'Woodworking', value: 12 },
    { name: 'Ceramics and Pottery', value: 18 },
    { name: 'Glass Crafts', value: 10 },
    { name: 'Candle Making', value: 7 },
    { name: 'Soap Making', value: 5 },
    { name: 'Home Decor', value: 14 },
    { name: 'Food and Baking', value: 22 },
    { name: 'Leatherworking', value: 9 },
    { name: 'Upcycling and Repurposing', value: 11 },
    { name: 'Mixed Media Art', value: 16 },
    { name: 'Beaded Crafts', value: 6 },
    { name: 'Metal Crafts', value: 13 },
    { name: 'DIY Home Improvement', value: 17 },
  ];

  const barColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe', '#00c49f', '#ff5e5b', '#ffaa00', '#cddc39', '#2196f3', '#9c27b0', '#3f51b5', '#f44336', '#673ab7', '#4caf50', '#e91e63'];

  const handleChartChange = (chartType) => {
    setSelectedChart(chartType);
  };

  let chartComponent;

  switch (selectedChart) {
    case 'pie':
      chartComponent = (
        <PieChart width={400} height={300}>
          <Pie dataKey="value" data={chartData} cx={200} cy={150} outerRadius={100} fill="#8884d8" label>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
          </Pie>
        </PieChart>
      );
      break;
    case 'line':
      chartComponent = (
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      );
      break;
    default:
      chartComponent = (
        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={(entry, index) => barColors[index % barColors.length]} />
        </BarChart>
      );
  }

  return (
    <>
      <Header />
      <Sidebar />
      <div className="home-page-container">
        <header className="home-page-header">
          <h1 className="home-page-title">Welcome to HomeMade Crafts</h1>
          <p className="home-page-description">Explore and create beautiful homemade crafts.</p>
        </header>
        <div className="chart-switcher">
          <button onClick={() => handleChartChange('bar')}>Bar Chart</button>
          <button onClick={() => handleChartChange('pie')}>Pie Chart</button>
          <button onClick={() => handleChartChange('line')}>Line Chart</button>
        </div>
        <div className="chart-container">
          <h2>Homemade Crafts Categories Chart</h2>
          {chartComponent}
        </div>

        
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
