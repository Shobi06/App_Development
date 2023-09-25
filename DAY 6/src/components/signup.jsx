import React, { useState } from 'react';
import '../assests/css/signup.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Name:', Name);
    console.log('E-mail:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const handleSignIn = () => {
    // Implement navigation to the login page or any desired action
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={handleNameChange}
        />
        
        <input
          type="e-mail"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button type="submit">Sign Up</button>
        </form>
      <p className="signup-link" style={{textDecoration:"none"}} >
        Already have an account?<Link to="/Login" style={{textDecoration:"none"}}>  Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
