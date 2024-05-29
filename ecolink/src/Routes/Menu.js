import React from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link
import Logo from '../assets/Green Simple Eco Energy Logo (1).png'; // Importe a imagem da logo
import '../styles/menu.css'; // Importe o arquivo de estilo do menu

const Menu = ({ onLogout }) => {
  const logout = () => {
    alert("Saindo...");
    // Adicione aqui a lógica para sair, como redirecionar para uma página de login
    onLogout(); // Chamando a função de logout fornecida pelo componente pai
  };

  return (
    <div className="menu-container"> {/* Adicione uma classe container para o menu */}
      <img src={Logo} alt="Logo" className="menu-logo" /> {/* Use a imagem importada aqui */}
      <nav className="menu-links">
        <ul>
          <li><Link to="/procurar" className="menu-link">Procurar</Link></li>
          <li><Link to="/perfil" className="menu-link">Perfil</Link></li>
        </ul>
      </nav>
      <nav className="menu-links">
        <ul>
          <li><Link to="/informacoes" className="menu-link">Informações</Link></li>
          <li><Link to="/configuracoes" className="menu-link">Configurações</Link></li>
          <li><button onClick={logout} className="logout-button">Sair</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
