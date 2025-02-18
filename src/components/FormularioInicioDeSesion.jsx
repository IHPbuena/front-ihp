import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


function FormularioInicioDeSesion() {
    const navigate=useNavigate()
    const [correousuario, setCorreousuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();





        // Realiza la solicitud al backend
        const response = await fetch(`http://localhost:8080/InicioDeSesion?correousuario=${correousuario}&contrasena=${contrasena}`);


        if (response.ok) {

            console.log('Datos enviados correctamente');
            console.log("Inicio de sesión exitoso");
            // Redirigir a la página deseada
            navigate("/CrearCuenta")

        } else {
            console.error('Error al enviar los datos');
            const errorMessage = await response.text();
            console.error(errorMessage); // Mostrar el mensaje del backend
            alert("Error al iniciar sesión: " + errorMessage); // Mostrar un alert con el error

        }
    };

    return (
        <div className="Formulario">
            <h1>Inicio de Sesion</h1>
            {/* Verifica si este mensaje aparece */}
            <p>Este es el formulario, debería aparecer aquí.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Correo de Usuario:
                    <input
                        type="text"
                        value={correousuario}
                        onChange={(e) => setCorreousuario(e.target.value)}
                        placeholder="Ingresa el correo de usuario"
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        placeholder="Ingresa la contraseña"
                    />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormularioInicioDeSesion;
