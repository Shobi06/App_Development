import React, { useState } from 'react';
import '../assests/css/Profile.css'; // Import your CSS file for styling

const Profile = () => {
  const [userData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    location: 'New York',
    dateOfBirth: 'June 28, 2003',
  phoneNumber: '+91 9345789512',
    avatarUrl: 'your_avatar_url_here.jpg', // Replace with the actual avatar URL
    bio: 'Passionate about crafting and creating beautiful handmade crafts.',
    interests: ['Crafting', 'Painting', 'DIY Projects', 'Cooking'],
    // Add more user details as needed
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        
        <h2 className="user-name">{userData.name}</h2>
        <p className="user-location">{userData.location}</p>
      </div>
      <div className="profile-details">
        <h3>About Me</h3>
        <p className="user-bio">{userData.bio}</p>
        <h3>Contact Information</h3>
        <p className="user-email">Email: {userData.email}</p>
        <p className="user-phone">Phone: {userData.phoneNumber}</p>
        <h3>Personal Information</h3>
        <p className="user-dob">Date of Birth: {userData.dateOfBirth}</p>
        <h3>Interests</h3>
        <ul className="user-interests">
          {userData.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default Profile;
