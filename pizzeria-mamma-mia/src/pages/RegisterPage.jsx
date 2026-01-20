import React, { useState } from 'react';

const RegisterPage = () => {
  // 1. Estados para los inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 2. Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault(); // Evita que se recargue la página

    // Validaciones
    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Los passwords no coinciden");
      return;
    }

    // Si pasa todas las validaciones
    alert("¡Registro exitoso!");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
            <h2 className="mb-4">Registro</h2>
            <form onSubmit={validarDatos}>
            
            {/* Input Email */}
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            {/* Input Password */}
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            {/* Input Confirm Password */}
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
            </div>

            <button type="submit" className="btn btn-dark">Register</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;