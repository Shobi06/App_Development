import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const HomeMadeCraftsGraph = () => {
  const data = [
    { name: 'Category 1', value: 10 },
    { name: 'Category 2', value: 15 },
    { name: 'Category 3', value: 5 },
    { name: 'Category 4', value: 20 },
    // Add more data points as needed
  ];

  return (
    <div className="graph-container">
      <h2>HomeMade Crafts Graph</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default HomeMadeCraftsGraph;
