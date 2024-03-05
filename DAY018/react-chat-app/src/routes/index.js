import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import routes
import { publicRoutes, authProtectedRoutes } from './routes';
import NonAuthLayout from '../layouts/NonAuthLayout';
import AuthLayout from '../layouts/AuthLayout';

const ChatAppRoutes = () => {
  return (
    <Routes>
      <Route path="auth" element={<NonAuthLayout />}>
        {publicRoutes.map(({ path, component }, idx) => (
          <Route path={path} element={component} key={idx} />
        ))}
      </Route>
      <Route path="/" element={<AuthLayout />}>
        {authProtectedRoutes.map(({ path, component }, idx) => (
          <Route path={path} element={component} key={idx} />
        ))}
      </Route>
    </Routes>
  );
};

export default ChatAppRoutes;
