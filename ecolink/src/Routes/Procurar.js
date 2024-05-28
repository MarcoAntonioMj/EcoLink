import React, { useState } from 'react';
import Menu from './Menu'; // Importe o componente Menu
import styles from '../styles/Procurar.module.css'; // Importe o arquivo de estilo com CSS Modules

const Procurar = () => {
  const [materiais, setMateriais] = useState([]); // Estado para armazenar os materiais selecionados
  const [cep, setCep] = useState(''); // Estado para armazenar o CEP inserido

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode realizar a lógica para buscar a lista de acordo com os materiais selecionados e o CEP
    console.log("Materiais selecionados:", materiais);
    console.log("CEP inserido:", cep);
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

  return (
    <div className={styles.procurarContainer}>
      <Menu /> {/* Renderize o componente Menu */}
      <div className={styles.procurarForm}>
        <h1>Procurar</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input type="checkbox" value="Papel" onChange={handleMaterialChange} />
              Papel
            </label>
            <label>
              <input type="checkbox" value="Plástico" onChange={handleMaterialChange} />
              Plástico
            </label>
            <label>
              <input type="checkbox" value="Vidro" onChange={handleMaterialChange} />
              Vidro
            </label>
            {/* Adicione mais materiais conforme necessário */}
          </div>
          <div>
            <label>
              CEP:
              <input type="text" value={cep} onChange={handleCepChange} />
            </label>
          </div>
          <button type="submit">Procurar</button>
        </form>
        {/* Aqui você pode exibir a lista de resultados após a busca */}
      </div>
    </div>
  );
};

export default Procurar;
