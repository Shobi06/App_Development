import React from 'react';
import '../assests/css/Terms.css'; // Import your CSS file with a unique name for styling

const TermsAndConditions = () => {
  return (
    <div className="custom-terms-and-conditions-container">
      <h2 className="custom-section-title">Terms and Conditions</h2>
      <div className="custom-terms-text">
        <h3 className="custom-sub-title">Welcome to Our Homemade Craft Store</h3>
        <p>
          Thank you for choosing our homemade craft store. By accessing or using our website, you agree to comply
          with and be bound by the following terms and conditions.
        </p>

        <h3 className="custom-sub-title">Craft Quality</h3>
        <p>
          Our homemade crafts are created with care and attention to detail. We strive to provide you with
          high-quality, unique, and handmade items. However, please note that each craft may vary slightly due to
          its handmade nature.
        </p>

        <h3 className="custom-sub-title">Ordering and Payment</h3>
        <p>
          To place an order, simply add items to your cart and proceed to checkout. We accept various payment
          methods for your convenience.
        </p>

        <h3 className="custom-sub-title">Shipping and Delivery</h3>
        <p>
          We offer shipping options to deliver your homemade crafts to your preferred address. Please review our
          shipping policies for more details on delivery times and fees.
        </p>

        <h3 className="custom-sub-title">Returns and Refunds</h3>
        <p>
          We want you to be satisfied with your purchase. If you are not completely happy with your homemade craft,
          please refer to our return and refund policy for instructions on how to return or exchange your item.
        </p>

        <h3 className="custom-sub-title">Privacy Policy</h3>
        <p>
          Protecting your privacy is important to us. Please review our privacy policy to understand how we collect,
          use, and safeguard your personal information.
        </p>

        <h3 className="custom-sub-title">Account Registration</h3>
        <p>
          You may be required to create an account to make purchases on our website. Please ensure that your account
          information is accurate and up to date.
        </p>

        <h3 className="custom-sub-title">Intellectual Property</h3>
        <p>
          All content on this website, including images, text, and designs, is protected by copyright and other
          intellectual property laws. You may not use our content without permission.
        </p>

        <h3 className="custom-sub-title">Contact Us</h3>
        <p>
          If you have any questions or concerns about our terms and conditions, feel free to{' '}
          <a href="/contact" className="custom-contact-link">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
