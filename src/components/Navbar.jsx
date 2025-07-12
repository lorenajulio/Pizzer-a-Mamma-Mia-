import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // si estás usando carrito
import { useUser } from "../context/UserContext"; // para manejar el token

const Navbar = () => {
  const total = 25000;
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                🍕Inicio
              </Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/profile">
                    🔓Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-white"
                    onClick={logout}
                  >
                    🔒Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    🔐Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/register">
                    📝 Registro
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <span className="navbar-text ms-auto text-white">
          <Link to="/cart" className="text-white text-decoration-none">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
