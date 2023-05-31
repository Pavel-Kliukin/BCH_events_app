import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
      <h2>Login</h2>
      {isLoginSuccess && <p>Login Successful!</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;
