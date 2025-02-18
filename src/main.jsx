import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx'; // Asegúrate de que la ruta sea correcta

const root = createRoot(document.getElementById('root'));
root.render(<App />);
