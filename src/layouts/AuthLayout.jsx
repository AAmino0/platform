import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <header>
        <nav>
          {/* Navigation spécifique aux utilisateurs connectés */}
        </nav>
      </header>
      <div className="main-content">
        <aside>
          {/* Barre latérale */}
        </aside>
        <main>{children}</main>
      </div>
      <footer>
        {/* Footer spécifique aux utilisateurs authentifiés */}
      </footer>
    </div>
  );
};

export default AuthLayout;
