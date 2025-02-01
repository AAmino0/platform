import React from 'react';
import RoutesComponent from './routes';  // Renommer l'import pour éviter le conflit
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RoutesComponent />
      </ThemeProvider>
    </AuthProvider>
    
  );
}

export default App;
