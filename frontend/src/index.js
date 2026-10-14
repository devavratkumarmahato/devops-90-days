// Import React library and its rendering function
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component (we'll create this next)
import App from './App';

// Get the <div id="root"></div> from index.html and render the app inside it
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in StrictMode (helps catch bugs during development)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
