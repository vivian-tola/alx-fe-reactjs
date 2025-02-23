// src/components/UserProfile.jsx
import React, {useContext} from 'react';

const UserProfile = () => {
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