// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'; // Adicionei Link
import TelaDeLogin from './Routes/TelaDeLogin';
import TelaDeInicio from './Routes/TelaDeInicio';
import Cadastrar from './Routes/Cadastrar';
import CadastrarCentroEcologico from './Routes/CadastrarCentroEcologico';
import CadastrarCatadores from './Routes/CadastrarCatadores';
import Procurar from './Routes/Procurar'; // Importar Procurar

// Simulação de autenticação
const isAutenticado = true; // Suponha que o usuário está autenticado

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Definindo a rota para o componente TelaDeLogin como a raiz */}
        <Route path="/" element={<TelaDeLogin />} />
        <Route path="/inicio" element={isAutenticado ? <TelaDeInicio /> : <Navigate to="/" />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/cadastrarCentroEcologico" element={<CadastrarCentroEcologico />} />
        <Route path="/cadastrarCatadores" element={<CadastrarCatadores />} />
        <Route path="/procurar" element={<Procurar />} /> {/* Adicionar a nova rota */}
        {/* Adicionando a rota para a tela de login */}
        <Route path="/login" element={<TelaDeLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
