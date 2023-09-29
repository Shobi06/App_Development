import React from 'react';
import '../assests/css/FAQ.css'; // Import your CSS file for styling

const FAQPage = () => {
  return (
    <div className="faq-page-container">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3 className="faq-question">1. How do I place an order?</h3>
          <p className="faq-answer">
            To place an order, simply browse our collection, select the items you love, and click "Add to Cart." Once
            you've added all your desired items, go to the shopping cart, review your selections, and proceed to
            checkout.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">2. What payment methods do you accept?</h3>
          <p className="faq-answer">
            We accept various payment methods, including credit cards, debit cards, PayPal, and more. You can choose
            your preferred payment option during the checkout process.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">3. How long does shipping take?</h3>
          <p className="faq-answer">
            Shipping times may vary depending on your location and the specific craft item. We provide estimated
            delivery times on each product page. You can also review our shipping policies for more details.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">4. What is your return policy?</h3>
          <p className="faq-answer">
            We want you to be completely satisfied with your purchase. If you're not happy with your homemade craft,
            please refer to our return and refund policy for instructions on how to initiate a return or exchange.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">5. Can I request custom-made crafts?</h3>
          <p className="faq-answer">
            Some of our artisans offer custom-made crafts. Please contact us to inquire about the possibility of
            requesting a custom order, and we'll do our best to accommodate your request.
          </p>
        </div>

        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQPage;
