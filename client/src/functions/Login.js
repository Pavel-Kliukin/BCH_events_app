import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import HeaderLoginAndSignUp from "../components/HeaderLoginAndSignUp";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!username || !password) {
      setError('Please fill in both username and password');
      return;
    }

    // Clear any previous error messages
    setError('');

    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          username,
          password,
        },
      });

      const users = response.data;

      if (users.length === 0) {
        setError('Invalid username or password');
        return;
      }

      // Handle successful login
      setIsLoginSuccess(true);
      setUsername('');
      setPassword('');
      // navigate to user page
      const user = users[0];
      navigate('/userpage', { state: { user } });
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <div>
        <HeaderLoginAndSignUp />
    <div className={styles.loginContainer}>
     
  <h2 className={styles.loginTitle}>Login</h2>
  {isLoginSuccess && <p className={styles.loginSuccess}>Login Successful!</p>}
  <form onSubmit={handleLogin} className={styles.loginForm}>
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
    {error && <p className={styles.loginError}>{error}</p>}
    <button type="submit">Login</button>
  </form>
  <p className={styles.signupLink}>Don't have an account? <Link to="/signup">Sign up</Link></p>
</div>
</div>
  );
};

export default Login;
