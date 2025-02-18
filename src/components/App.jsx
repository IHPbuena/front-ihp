import React from 'react';
import FormularioInicioDeSesion from "./FormularioInicioDeSesion.jsx";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CajaUsuario} from "./CajaUsuario.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function App() {
    return (


        <Router>
            <Routes>
                <Route path="/" element={<FormularioInicioDeSesion />} />


                <Route path="/CrearCuenta" element={<PrivateRoute element={CajaUsuario}/>} />


        </Routes>
</Router>

    );


}

export default App;



