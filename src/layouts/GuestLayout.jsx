import React from 'react';
import Header from '../components/partials/Header';

const GuestLayout = ({ children }) => {
  return (
    <div className="guest-layout font-poppins">
      <Header />  {/* Navbar intégré ici */}
      <main>{children}</main>
      <footer>
        {/* Footer général */}
      </footer>
    </div>
  );
};

export default GuestLayout;
