import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css/animate.min.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme(theme)}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
