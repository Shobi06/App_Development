import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, updateUser } from './Redux/UserSlice';

function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  // Effect to load user data when the component mounts
  useEffect(() => {
    // You can fetch user data from an API or any other data source here
    // For this example, we'll use the user object from Redux
    setUserData(user.user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    // Dispatch an action to update the user profile with the new data
    dispatch(updateUser(userData));
    // You can also send this data to your backend for storage and update
    // Redirect or perform any other desired actions after updating the profile
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={userData.fullName || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={userData.bio || ''}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleUpdateProfile}>
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
