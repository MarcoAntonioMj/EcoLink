import React, { useState } from 'react';
import Menu from './Menu'; // Importe o componente Menu
import '../styles/procurar.css'; // Importe o arquivo de estilo sem CSS Modules

const Procurar = () => {
  const [materiais, setMateriais] = useState([]); // Estado para armazenar os materiais selecionados
  const [cep, setCep] = useState(''); // Estado para armazenar o CEP inserido
  const [mostrarListaEmpresas, setMostrarListaEmpresas] = useState(false); // Estado para controlar a exibição da lista de empresas

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode realizar a lógica para buscar a lista de acordo com os materiais selecionados e o CEP
    console.log("Materiais selecionados:", materiais);
    console.log("CEP inserido:", cep);
    // Após a busca, exibir a lista de empresas
    setMostrarListaEmpresas(true);
  };

  const handleMaterialChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMateriais([...materiais, value]); // Adiciona o material selecionado ao estado
    } else {
      setMateriais(materiais.filter(material => material !== value)); // Remove o material deselecionado do estado
    }
  };

  const handleCepChange = (event) => {
    setCep(event.target.value); // Atualiza o estado do CEP conforme o usuário digita
  };

  // Lista de materiais disponíveis
  const listaMateriais = [
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

  // Função para renderizar a lista de empresas
  const renderizarListaEmpresas = () => {
    // Aqui você pode implementar a lógica para buscar e exibir a lista de empresas com base nos materiais selecionados e no CEP
    return (
      <div>
        <h2>Lista de Empresas Disponíveis</h2>
        {/* Aqui você pode renderizar a lista de empresas */}
        <button onClick={() => setMostrarListaEmpresas(false)}>Voltar</button>
      </div>
    );
  };

  return (
    <div>
      <Menu /> {/* Renderize o componente Menu */}
      <div className="procurarContainer">
        <div className="procurarOuter">
          <div className="procurarForm">
            <h1>Procurar</h1>
            {mostrarListaEmpresas ? (
              renderizarListaEmpresas() // Se mostrarListaEmpresas for true, renderiza a lista de empresas
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  {/* Mapeando a lista de materiais e renderizando as checkboxes */}
                  {listaMateriais.map(material => (
                    <label key={material}>
                      <input type="checkbox" value={material} onChange={handleMaterialChange} />
                      {material}
                    </label>
                  ))}
                </div>
                <div>
                  <label>
                    CEP:
                    <input type="text" value={cep} onChange={handleCepChange} />
                  </label>
                </div>
                <button type="submit">Procurar</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procurar;
