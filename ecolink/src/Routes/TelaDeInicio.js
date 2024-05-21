import React from 'react';
import '../styles/styleNavbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-item">Perfil</a>
        <a href="#" className="navbar-item">Inicio</a>
        <a href="#" className="navbar-item">Contato</a>
      </div>
    </div>
  );
};

const TelaDeInicio = () => {
  return (
    <div>
      <Navbar />
      <h1>Bem-vindo à Página de Início</h1>
      <p>Esta é a página de início do seu aplicativo após o login.</p>
    </div>
  );
};

export default TelaDeInicio;
