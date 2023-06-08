import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Signup.module.css';
import HeaderLoginAndSignUp from "../components/HeaderLoginAndSignUp";

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
        <HeaderLoginAndSignUp />

    <div className={styles.signupContainer}>
    <h2 className={styles.signupTitle}>Signup</h2>
    {isSignupSuccess && <p className={styles.signupSuccess}>Signup Successful!</p>}
    <form onSubmit={handleSignup} className={styles.signupForm}>
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
       {error && <p className={styles.signupError}>{error}</p>}
        <button type="submit">Signup</button>
      </form>
      <div className={styles.alreadyAccountBg}>
      <p className={styles.alreadyAccount}>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Signup;

