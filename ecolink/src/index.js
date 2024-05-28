import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TelaDeLogin from './Routes/TelaDeLogin';
import TelaDeInicio from './Routes/TelaDeInicio';
import Cadastrar from './Routes/Cadastrar';
import CadastrarCentroEcologico from './Routes/CadastrarCentroEcologico';
import CadastrarCatadores from './Routes/CadastrarCatadores';
import Procurar from './Routes/Procurar'; 

// Simulação de autenticação
const isAutenticado = true; // Suponha que o usuário está autenticado

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaDeLogin />} />
        <Route path="/inicio" element={isAutenticado ? <TelaDeInicio /> : <Navigate to="/" />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/cadastrarCentroEcologico" element={<CadastrarCentroEcologico />} />
        <Route path="/cadastrarCatadores" element={<CadastrarCatadores />} />
        <Route path="/procurar" element={<Procurar />} /> 
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
