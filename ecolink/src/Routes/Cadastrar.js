import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styleCadastrar.css';

import imageCentroEcologico from '../assets/centro-ecologico.jpg';
import imageCatadores from '../assets/catadores.jpg';

function Cadastrar() {
  return (
    <div className="container-cadastrar">
      <Link to="/CadastrarCentroEcologico" className="cadastrar-option">
        <img src={imageCentroEcologico} alt="Centro Ecológico" />
        <div className="overlay">
          <h2>Cadastro Centro Ecológico</h2>
        </div>
      </Link>
      <Link to="/CadastrarCatadores" className="cadastrar-option">
        <img src={imageCatadores} alt="Catadores" />
        <div className="overlay">
          <h2>Cadastro Catadores</h2>
        </div>
      </Link>
      <Link to="/" className="back-button">Voltar</Link>
    </div>
  );
}

export default Cadastrar;
