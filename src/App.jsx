import React from 'react';
import RoutesComponent from './routes';  // Renommer l'import pour éviter le conflit
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
