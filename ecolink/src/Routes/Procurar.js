// Procurar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styleTelaDeInicio.css'; // Import custom CSS

const Procurar = () => {
  const [materiais, setMateriais] = useState([]);
  const [cep, setCep] = useState('');
  const [mostrarListaEmpresas, setMostrarListaEmpresas] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Materiais selecionados:", materiais);
    console.log("CEP inserido:", cep);
    setMostrarListaEmpresas(true);
  };

  const handleMaterialChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMateriais([...materiais, value]);
    } else {
      setMateriais(materiais.filter(material => material !== value));
    }
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const listaMateriais = [
    'Papel', 'Plástico', 'Vidro', 'Metal', 'Eletrônicos',
    'Baterias', 'Óleo de Cozinha', 'Roupas', 'Móveis', 'Lâmpadas'
  ];

  const renderizarListaEmpresas = () => {
    return (
      <div>
        <h2>Lista de Empresas Disponíveis</h2>
        <button className="btn btn-secondary" onClick={() => setMostrarListaEmpresas(false)}>Voltar</button>
      </div>
    );
  };

  return (
    <div className="procurar-container">
      <nav className="telaDeInicio-navbar navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="telaDeInicio-navbar-brand navbar-brand" href="#">EcoLink</a>
        <button className="telaDeInicio-navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="telaDeInicio-navbar-collapse collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="telaDeInicio-navbar-nav navbar-nav">
            <li className="telaDeInicio-nav-item nav-item"><a className="telaDeInicio-nav-link nav-link" href="#hero">Início</a></li>
            <li className="telaDeInicio-nav-item nav-item"><a className="telaDeInicio-nav-link nav-link" href="#about">Sobre</a></li>
            <li className="telaDeInicio-nav-item nav-item"><a className="telaDeInicio-nav-link nav-link" href="#how-it-works">Como Funciona</a></li>
            <li className="telaDeInicio-nav-item nav-item"><a className="telaDeInicio-nav-link nav-link" href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5 pt-5">
        <h1>Procurar Recicladoras</h1>
        <p>Bem-vindo à página de busca por recicladoras! Siga o tutorial abaixo para encontrar recicladoras próximas a você.</p>

        <section id="tutorial" className="mb-4">
          <h2>Como Usar</h2>
          <ol>
            <li>Selecione os materiais que deseja reciclar.</li>
            <li>Insira seu CEP para encontrar recicladoras próximas.</li>
            <li>Clique no botão "Procurar" para ver a lista de recicladoras disponíveis.</li>
          </ol>
        </section>

        {mostrarListaEmpresas ? (
          renderizarListaEmpresas()
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="materiais">Materiais:</label>
              <div id="materiais" className="d-flex flex-wrap">
                {listaMateriais.map(material => (
                  <div className="form-check mr-3" key={material}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={material}
                      onChange={handleMaterialChange}
                      id={material}
                    />
                    <label className="form-check-label" htmlFor={material}>
                      {material}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                className="form-control"
                id="cep"
                value={cep}
                onChange={handleCepChange}
              />
            </div>
            <button type="submit" className="btn btn-success">Procurar</button>
            <Link to="/inicio" className="btn btn-secondary ml-2">Voltar</Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default Procurar;
