import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Pizzería Mamma Mía
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                🍕Inicio
              </Link>{" "}
              |{" "}
            </li>

            {token ? (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/profile">
                    🔓Perfil
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    🔒Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    🔐Login
                  </Link>{" "}
                  |{" "}
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">
                    🔐 Registro
                  </Link>{" "}
                  |{" "}
                </li>
              </>
            )}
          </ul>
        </div>
        <span className="navbar-text ms-auto text-white">
          <Link to="/cart">🛒 Total:</Link>${total.toLocaleString()}
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
