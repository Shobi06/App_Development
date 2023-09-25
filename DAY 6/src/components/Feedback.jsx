import React, { useState } from 'react';
import '../assests/css/Feedback.css'; // Import your CSS file for styling
function FeedbackForm() {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the feedback and rating to the server
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="rating-section">
          <label htmlFor="rating">Rate your experience:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className={value === rating ? 'selected' : ''}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  onClick={() => handleRatingChange(value)}
                />
                &#9733;
              </label>
            ))}
          </div>
        </div>

        <div className="feedback-section">
          <label htmlFor="feedback">Any Suggestion:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            cols="50"
            value={feedback}
            onChange={handleFeedbackChange}
            
          ></textarea>
        </div>

        <div className="submit-section">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
