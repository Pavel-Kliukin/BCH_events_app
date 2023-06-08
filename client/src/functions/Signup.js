import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !phone || !username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Add additional validation checks as per your requirements
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear any previous error messages
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/users', {
        name,
        email,
        phone,
        username,
        password,
      });

      // Handle successful signup
      console.log(response.data);
      setIsSignupSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setUsername('');
      setPassword('');
    } catch (error) {
      // Handle signup error
      console.error(error);
    }
  };

  const isValidEmail = (email) => {
    // Perform email validation logic, e.g., using regex or other methods
    // Return true if the email is valid, false otherwise
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <h2>Signup</h2>
      {isSignupSuccess && <p>Signup Successful!</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
};

export default Signup;

