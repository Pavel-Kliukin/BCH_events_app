import React from 'react';
import { useLocation } from 'react-router-dom';

const UserPage = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h2>Welcome</h2>
      <p>You are logged in as, {user.name}!</p>
    </div>
  );
};

export default UserPage;
