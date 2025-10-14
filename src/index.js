import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

// Initialize GA4 with your Measurement ID
ReactGA.initialize('G-NBSCSQBL36');

// Optional: track initial pageview
ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
