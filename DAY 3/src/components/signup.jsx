import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assests/css/login.css';

function SignUp() {
  const navigate=useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your signup logic here
  };

  const handleGoBack = () => {
    // Implement navigation or any desired action to go back
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={()=> navigate('/login')} type="submit">OK</button>
        <button onClickCapture={()=> navigate('/login')} type="button" onClick={handleGoBack}>Go Back</button>
      </form>
    </div>
  );
}

export default SignUp;
