import React from 'react';
import RoutesComponent from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
