import React from 'react';
import { Link } from 'react-router-dom';  // Assurez-vous que react-router-dom est installé
import MobileMenu from './MobileMenu'; // Importer le menu mobile

function Header() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setIsDarkMode(storedMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="bg-orange-500 text-white py-2 px-4 rounded">
          LOGO
        </Link>

        {/* Liens de navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/find-a-mentor" className="text-gray-800 dark:text-white hover:text-orange-500">Find a Mentor</Link>
          <Link to="/book-a-session" className="text-gray-800 dark:text-white hover:text-orange-500">Book a Session</Link>
          <Link to="/plan-and-pricing" className="text-gray-800 dark:text-white hover:text-orange-500">Plan/Pricing</Link>
          <Link to="/become-a-mentor" className="text-gray-800 dark:text-white hover:text-orange-500">Become a Mentor</Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />

        {/* Toggle Dark/Light Mode */}
        <div className="relative">
          <button
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded flex items-center"
            onClick={() => setIsDarkMode(prevMode => !prevMode)}
          >
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
