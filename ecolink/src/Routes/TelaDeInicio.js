// TelaDeInicio.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styleTelaDeInicio.css';
import { Link } from 'react-router-dom';

const TelaDeInicio = () => {
  return (
    <div className="telaDeInicio-container">
      <header className="telaDeInicio-header bg-success text-white text-center py-3">
        <h1>Eco Link</h1>
      </header>

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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="telaDeInicio-hero d-flex align-items-center justify-content-center text-center text-white bg-success" style={{ height: '300px' }}>
        <div>
          <h2>Encontre Recicladoras Próximas a Você</h2>
          <p>Ajude a preservar o meio ambiente localizando recicladoras na sua área.</p>
          <Link to="/procurar" className="telaDeInicio-btn-localizar btn btn-light text-success">Localizar Recicladoras</Link>
        </div>
      </section>

      <section id="about" className="telaDeInicio-about container py-5">
        <h2 className="text-center">Sobre</h2>
        <p className="text-center">Nosso objetivo é facilitar o acesso a pontos de reciclagem, promovendo a sustentabilidade e a preservação do meio ambiente. Usando nossa aplicação, você pode encontrar recicladoras próximas e contribuir para um futuro mais verde.</p>
      </section>

      <section id="how-it-works" className="telaDeInicio-how-it-works bg-light py-5">
        <div className="container">
          <h2 className="text-center">Como Funciona</h2>
          <ol className="text-center">
            <li>Permita o acesso à sua localização.</li>
            <li>Nosso sistema buscará recicladoras próximas.</li>
            <li>Receba uma lista de opções e escolha a mais conveniente.</li>
          </ol>
        </div>
      </section>

      <section id="contact" className="telaDeInicio-contact container py-5">
        <h2 className="text-center">Contato</h2>
        <p className="text-center">Tem alguma dúvida ou sugestão? Entre em contato conosco!</p>
        <form action="#" method="post" className="telaDeInicio-form mx-auto" style={{ maxWidth: '600px' }}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="telaDeInicio-btn-enviar btn btn-success btn-block">Enviar</button>
        </form>
      </section>

      <footer className="telaDeInicio-footer bg-dark text-white text-center py-3">
        <p>&copy; 2024 EcoLink. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default TelaDeInicio;
