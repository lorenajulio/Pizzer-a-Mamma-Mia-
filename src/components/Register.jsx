import React, { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificar, setVerificar] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !verificar.trim()) {
      alert("Todos los campos son obligatorios");
    } else if (password.length < 6) {
      alert("La contraseña debe tener 6 caracteres");
    } else if (password !== verificar) {
      alert("La contraseña no coincide");
    } else {
      alert(`Bienvenido ${email}`);
    }
  };

  return (
    <section className="container mt-5">
      <h2>Registrar</h2>
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
        <div>
          <label className="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            onChange={(e) => setVerificar(e.target.value)}
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
export default Register;
