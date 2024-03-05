import React from 'react';

import Login from '../pages/auth/Login';
import Logout from '../pages/auth/Logout';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/dashboard';
import { Navigate } from 'react-router-dom';

const publicRoutes = [
  { path: 'login', component: <Login /> },
  { path: 'logout', component: <Logout /> },
  { path: 'forgot-password', component: <ForgotPassword /> },
  { path: 'register', component: <Register /> },
];

const authProtectedRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  // {
  //   path: '/',
  //   exact: true,
  //   component: <Navigate to="/dashboard" />,
  // },
  // { path: '*', component: <Navigate to="/dashboard" /> },
];

export { publicRoutes, authProtectedRoutes };
