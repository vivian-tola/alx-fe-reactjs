// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, useAuth }) => {
  return useAuth ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
