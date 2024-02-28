import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import routes
import { publicRoutes } from './routes';
import NonAuthLayout from '../layouts/NonAuthLayout';

const ChatAppRoutes = () => {
  return (
    <Routes>
      <Route path="auth" element={<NonAuthLayout />}>
        {publicRoutes.map(({ path, component }, idx) => (
          <Route path={path} element={component} key={idx} />
        ))}
      </Route>
    </Routes>
  );
};

export default ChatAppRoutes;
