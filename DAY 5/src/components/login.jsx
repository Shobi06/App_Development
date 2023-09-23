import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assests/css/login.css'; 
import { useDispatch } from 'react-redux';
import { login } from './Redux/UserSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is valid before proceeding (You can remove this condition)
    // if (!email || !password) {
    //   return;
    // }

    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    dispatch(login(email));
    navigate('/CraftDashboard');
  };

  const handleSignUp = () => {
    // Implement navigation to the sign-up page or any desired action
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          // Remove the "required" attribute for HTML5 validation
        />
        {/* Remove the email error message */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      <p className="forgot-password-link">
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
    </div>
  );
}

export default Login;
