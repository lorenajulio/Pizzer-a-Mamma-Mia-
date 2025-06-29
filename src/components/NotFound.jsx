import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>404 - Página no encontrada</h1>
    <p>¡Oops! Esta página no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

export default NotFound;
