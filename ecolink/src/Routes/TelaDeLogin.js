import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Green Simple Eco Energy Logo (1).png';
import '../styles/styleTelaDeLogin.css'; // Importa o arquivo CSS

function TelaDeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para lidar com o clique no botão de login
  const handleLogin = () => {
    // Aqui você pode adicionar lógica para validar o email e a senha, se necessário

    // Redireciona para a página de início
    window.location.href = "/inicio";
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <div className="login-form">
            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title">
              <img src={logoImg} alt="EcoLink" />
            </span>
            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              {/* Use o Link para redirecionar para a página de início */}
              <button className="login-form-btn" onClick={handleLogin}>Login</button>
            </div>
            <div className="text-center">
              <span className="txt">Não possui conta?</span>
              <Link className="txt2" to="/Cadastrar">Criar conta</Link> {/* Use o Link para navegar para a página de cadastro */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaDeLogin;
