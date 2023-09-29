import React, { useState } from 'react';
import '../assests/css/Tracking.css'; // Import your CSS file for styling

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState('In Progress'); // Example initial status

  const handleStatusChange = (newStatus) => {
    setOrderStatus(newStatus);
  };

  return (
    <div className="order-tracking-container">
      <h2>Order Tracking</h2>
      <div className="order-status">
        <h3>Current Status:</h3>
        <p className={`status ${orderStatus.toLowerCase()}`}>{orderStatus}</p>
      </div>
      <div className="status-buttons">
        <button onClick={() => handleStatusChange('In Progress')} className="in-progress">
          In Progress
        </button>
        <button onClick={() => handleStatusChange('Shipped')} className="shipped">
          Shipped
        </button>
        <button onClick={() => handleStatusChange('Delivered')} className="delivered">
          Delivered
        </button>
        {/* Add more status buttons as needed */}
        <button onClick={() => handleStatusChange('Processing')} className="processing">
          Processing
        </button>
        <button onClick={() => handleStatusChange('Out for Delivery')} className="out-for-delivery">
          Out for Delivery
        </button>
        <button onClick={() => handleStatusChange('Arrived at Destination')} className="arrived-at-destination">
          Arrived at Destination
        </button>
        {/* Add more status buttons as needed */}
      </div>
    </div>
  );
};

export default OrderTracking;
