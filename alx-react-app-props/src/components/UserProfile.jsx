// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (userData) => {
  const userData = useContext();
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;