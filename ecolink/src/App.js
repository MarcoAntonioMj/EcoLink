import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TelaDeInicio from './Routes/TelaDeInicio'; // Importar TelaDeInicio
import TelaDeLogin from './Routes/TelaDeLogin';
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
        <Route path="/" element={<TelaDeInicio />} /> {/* Alterada a rota para TelaDeInicio */}
        <Route path="/login" element={<TelaDeLogin />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/cadastrarCentroEcologico" element={<CadastrarCentroEcologico />} />
        <Route path="/cadastrarCatadores" element={<CadastrarCatadores />} />
        <Route path="/procurar" element={<Procurar />} />
        <Route path="/inicio" element={isAutenticado ? <TelaDeInicio /> : <Navigate to="/" />} />
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
