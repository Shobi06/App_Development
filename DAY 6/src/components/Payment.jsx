import React, { useState } from 'react';
import '../assests/css/Payment.css'; // Import your CSS file for styling

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handlePayment = () => {
    // Validate the required fields
    if (!cardNumber || !expiry || !cvv || !name) {
      setError('Please fill in all required fields.');
      return; // Prevent payment if any field is empty
    }

    // In a real application, you would integrate with a payment gateway here.
    // This is just a placeholder function for demonstration purposes.
    alert('Payment successful!');
  };

  return (
    <div className="payment-page-container">
      <h1 className="payment-page-title">Payment Page</h1>
      <div className="payment-form-container">
        <div className="payment-form-group">
          <label htmlFor="cardNumber" className="payment-label">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="payment-input"
          />
        </div>
        <div className="payment-form-group">
          <label htmlFor="expiry" className="payment-label">Expiry Date:</label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="payment-input"
            placeholder="MM/YY"
          />
        </div>
        <div className="payment-form-group">
          <label htmlFor="cvv" className="payment-label">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="payment-input"
            placeholder="CVV"
          />
        </div>
        <div className="payment-form-group">
          <label htmlFor="name" className="payment-label">Cardholder Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="payment-input"
          />
        </div>
        {error && <div className="payment-error">{error}</div>}
        <button className="payment-button" onClick={handlePayment}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
