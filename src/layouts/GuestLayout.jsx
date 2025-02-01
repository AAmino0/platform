import React from 'react';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';

const GuestLayout = ({ children }) => {
  return (
    <div className="guest-layout font-poppins">
      <Header />  {/* Navbar intégré ici */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
