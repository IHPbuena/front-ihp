import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/FormularioInicioDeSesion.css'; // Importamos el CSS

function FormularioInicioDeSesion() {
    const navigate = useNavigate();
    const [correousuario, setCorreousuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`http://localhost:8080/InicioDeSesion?correousuario=${correousuario}&contrasena=${contrasena}`);

        if (response.ok) {
            console.log('Datos enviados correctamente');
            console.log("Inicio de sesión exitoso");
            navigate("/CrearCuenta");
        } else {
            console.error('Error al enviar los datos');
            const errorMessage = await response.text();
            console.error(errorMessage);
            alert("Error al iniciar sesión: " + errorMessage);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Inicio de Sesión</h1>
            <br/>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="correo" className="form-label">Correo de Usuario:</label>
                <input
                    id="correo"
                    className="form-input"
                    type="text"
                    value={correousuario}
                    onChange={(e) => setCorreousuario(e.target.value)}
                    placeholder="Ingresa el correo de usuario"
                />

                <label htmlFor="contrasena" className="form-label">Contraseña:</label>
                <input
                    id="contrasena"
                    className="form-input"
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    placeholder="Ingresa la contraseña"
                />

                <button type="submit" className="form-button">Enviar</button>
            </form>
        </div>
    );
}

export default FormularioInicioDeSesion;
