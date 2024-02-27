import React from 'react';

function AuthLayout({ children }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">{children}</div>
    </div>
  );
}

export default AuthLayout;
