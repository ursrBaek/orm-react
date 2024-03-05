import React from 'react';
import LeftSidebarMenu from './LeftSidebarMenu';

function AuthLayout({ children }) {
  return (
    <div>
      <LeftSidebarMenu />
      {children}
    </div>
  );
}

export default AuthLayout;
