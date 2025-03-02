import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import './index.css';
import Sidebar from './components/sidebar';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Chakra UI Provider for Styling */}
    <ChakraProvider theme={theme}>
      
      {/* Enables Dark Mode Toggle Support */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {/* Main App Component */}
      <App />

    </ChakraProvider>
  </React.StrictMode>
);
