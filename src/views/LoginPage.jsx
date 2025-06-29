import React, { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios");
    } else if (password.length < 6) {
      alert("La contraseña debe tener 6 caracteres");
    } else {
      alert(`Bienvenido ${email}`);
    }
  };

  return (
    <section className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={validarDatos}>
        <div class="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            form-control
          />
        </div>
        <div>
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            form-control
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
    </section>
  );
};
export default LoginPage;
