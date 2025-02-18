import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente PrivateRoute para proteger las rutas
function PrivateRoute({ element, ...rest }) {
    // Verifica si el token de autenticación está presente
    const token = localStorage.getItem('authToken');

    // Si no hay token, redirige a la página de inicio de sesión
    if (!token) {
        return <Navigate to="/" />; // Redirigir a la página de inicio de sesión
    }

    // Si hay token, muestra el componente solicitado
    return element;
}

export default PrivateRoute;
