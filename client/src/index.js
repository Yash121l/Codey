import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // Tailwind CSS imports
import App from './App';

// Render the main App component into the root div
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
