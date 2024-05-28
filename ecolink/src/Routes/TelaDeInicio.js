// TelaDeInicio.js

import React from 'react';
import Menu from './Menu'; // Importe o componente Menu
import '../styles/styleTelaDeInicio.css'; // Importe o arquivo de estilo

const TelaDeInicio = () => {
  const handleLogout = () => {
    // Adicione aqui a lógica para o logout, como redirecionar para a tela de login
  };

  return (
    <div className="tela-de-inicio-container">
      <Menu onLogout={handleLogout} /> {/* Renderize o componente Menu */}
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
