// TelaDeInicio.js

import React from 'react';
import '../styles/styleTelaDeInicio.css'; // Importe o arquivo de estilo

const TelaDeInicio = () => {
  const logout = () => {
    alert("Saindo...");
    // Adicione aqui a lógica para sair, como redirecionar para uma página de login
  };

  return (
    <div className="tela-de-inicio-container">
      <div className="tela-de-inicio-navbar">
        <img src="assets/img/logo.svg" alt="Logo" className="tela-de-inicio-logo" />
        <nav className="tela-de-inicio-menu">
          <ul>
            <li><a href="procurar.html" className="menu-link">Procurar</a></li>
            <li><a href="Perfil.html" className="menu-link">Perfil</a></li>
          </ul>
        </nav>
        <nav className="tela-de-inicio-menu-bottom">
          <ul>
            <li><a href="informacoes.html" className="menu-link">Informações</a></li>
            <li><a href="configuracoes.html" className="menu-link">Configurações</a></li>
            <li><button onClick={logout} className="logout-button">Sair</button></li>
          </ul>
        </nav>
      </div>
      <div className="tela-de-inicio-main-content">
        <div className="tela-de-inicio-title">
          <h1>ECOLINK</h1>
        </div>
        <p className="tela-de-inicio-first-paragraph">Conexão e organização para incentivar a reciclagem e apoiar os recicladores locais.</p>
        <p className="tela-de-inicio-sub-text">Tudo em um só lugar</p>
        <div className="tela-de-inicio-last-paragraph">
          <p>Nosso principal propósito é facilitar o engajamento na reciclagem, promovendo a conexão entre indivíduos e centros de reciclagem, além de apoiar os recicladores locais em suas atividades.</p>
        </div>
      </div>
    </div>
  );
};

export default TelaDeInicio;
