import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/CadastrarCentroEcologico.css'

const materiais = [
  'Papel',
  'Plástico',
  'Vidro',
  'Metal',
  'Eletrônicos',
  'Baterias',
  'Óleo de Cozinha',
  'Roupas',
  'Móveis',
  'Lâmpadas'
];

function CadastrarCentroEcologico() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [materiaisAceitos, setMateriaisAceitos] = useState([]);

  const navigate = useNavigate(); // Use o hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de envio do formulário aqui
  };

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="centro-ecologico-container">
      <header className="centro-ecologico-header">
        Cadastro de Centro Ecológico
      </header>
      <div className="centro-ecologico-form-container">
        <form onSubmit={handleSubmit} className="centro-ecologico-form">
          <div className="centro-ecologico-form-group">
            <label htmlFor="nome">Razão Social</label>
            <input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="nasc">Data de Fundação</label>
            <input
              id="nasc"
              type="date"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="cel">Celular</label>
            <input
              id="cel"
              type="number"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              type="number"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              id="cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </div>
          <div className="centro-ecologico-form-group">
            <label>Materiais Aceitos</label>
            <div className="centro-ecologico-checkbox-group">
              {materiais.map((material) => (
                <div key={material}>
                  <input
                    type="checkbox"
                    id={material}
                    value={material}
                    checked={materiaisAceitos.includes(material)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setMateriaisAceitos((prev) =>
                        checked ? [...prev, material] : prev.filter((item) => item !== material)
                      );
                    }}
                  />
                  <label htmlFor={material}>{material}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="centro-ecologico-form-actions">
            <button type="submit" className="centro-ecologico-btn">Enviar</button>
            <button type="button" className="centro-ecologico-btn" onClick={handleBack}>Voltar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastrarCentroEcologico;
