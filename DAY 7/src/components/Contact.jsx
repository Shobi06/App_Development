import React from 'react';
import '../assests/css/Contact.css'; // Import your CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
