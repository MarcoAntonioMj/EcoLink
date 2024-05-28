import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/cadastrarCatadores.css'

function CadastrarCatadores() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitaDoacao, setAceitaDoacao] = useState('Sim');
  
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de envio do formulário aqui
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="catador-container">
      <header className="catador-header">
        Cadastro de Catadores
      </header>
      <div className="catador-form-container">
        <form onSubmit={handleSubmit} className="catador-form">
          <div className="catador-form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="nasc">Data de Nascimento</label>
            <input
              id="nasc"
              type="date"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="natural">Naturalidade</label>
            <input
              id="natural"
              value={naturalidade}
              onChange={(e) => setNaturalidade(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="cel">Celular</label>
            <input
              id="cel"
              type="number"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              type="number"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="catador-form-group">
            <label>Faz coleta ?</label>
            <div className="catador-radio-group">
              <label><input type="radio" value="Sim" checked={aceitaDoacao === 'Sim'} onChange={() => setAceitaDoacao('Sim')} /> Sim</label>
              <label><input type="radio" value="Não" checked={aceitaDoacao === 'Não'} onChange={() => setAceitaDoacao('Não')} /> Não</label>
            </div>
          </div>
          <div className="catador-form-actions">
            <button type="submit" className="catador-btn">Enviar</button>
            <button type="button" className="catador-btn" onClick={handleBack}>Voltar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastrarCatadores;
