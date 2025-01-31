import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        className="text-white bg-orange-500 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      
      {isOpen && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-md w-48">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link to="/find-a-mentor" className="text-gray-800 dark:text-white hover:text-orange-500">Find a Mentor</Link>
            </li>
            <li>
              <Link to="/book-a-session" className="text-gray-800 dark:text-white hover:text-orange-500">Book a Session</Link>
            </li>
            <li>
              <Link to="/plan-and-pricing" className="text-gray-800 dark:text-white hover:text-orange-500">Plan/Pricing</Link>
            </li>
            <li>
              <Link to="/become-a-mentor" className="text-gray-800 dark:text-white hover:text-orange-500">Become a Mentor</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
