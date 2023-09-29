import React from 'react';
import '../assests/css/Privacy.css'; // Import your CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h2 className="section-title">Privacy Policy</h2>
      <div className="privacy-text">
        <p>
          At [Your Homemade Craft Store Name], we value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
          website.
        </p>

        <h3 className="sub-title">Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address, shipping address, and payment details
          when you make a purchase or create an account.
        </p>

        <h3 className="sub-title">How We Use Your Information</h3>
        <p>
          We use your information to process orders, communicate with you, and provide a personalized shopping
          experience. Your data may also be used for marketing and analytics purposes.
        </p>

        <h3 className="sub-title">Data Security</h3>
        <p>
          We take security measures to protect your data. We use secure encryption and follow industry best practices
          to keep your information safe.
        </p>

        <h3 className="sub-title">Cookies</h3>
        <p>
          We use cookies to improve your browsing experience. You can choose to disable cookies in your browser
          settings.
        </p>

        <h3 className="sub-title">Third-Party Services</h3>
        <p>
          We may use third-party services for payment processing and analytics. These services have their own privacy
          policies.
        </p>

        <h3 className="sub-title">Your Rights</h3>
        <p>
          You have the right to access, update, or delete your personal information. If you have any questions or
          concerns about your data, please contact us.
        </p>

        <h3 className="sub-title">Changes to Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page.
        </p>

        <h3 className="sub-title">Contact Us</h3>
        <p>
          If you have any questions or concerns about our privacy practices, please{' '}
          <a href="/contact" className="contact-link">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
