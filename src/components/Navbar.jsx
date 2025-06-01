import React from "react";

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
              <a class="nav-link active" aria-current="page" href="#">
                🍕Home
              </a>
            </li>

            {token ? (
              <>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    🔓 Profile
                  </a>
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
                  <a class="nav-link" href="#">
                    🔐Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    🔐Registrar
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <span className="navbar-text ms-auto text-white">
          🛒 Total: ${total.toLocaleString()}
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
