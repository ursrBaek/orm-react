import React from 'react';

import Login from '../pages/auth/Login';
import Logout from '../pages/auth/Logout';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Register from '../pages/auth/Register';

const publicRoutes = [
  { path: 'login', component: <Login /> },
  { path: 'logout', component: <Logout /> },
  { path: 'forgot-password', component: <ForgotPassword /> },
  { path: 'register', component: <Register /> },
];

export { publicRoutes };
