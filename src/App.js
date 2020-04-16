import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([{}]);
  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    // TODO Adiciona repositorios na lista
    const response = await api.post('repositories', {
      url: "http://www.criargames.com.br",
      title: "Desafio 3 - Repositório 1",
      techs: ['teste', 'teste', 'teste'],
      likes: 0,
    })

    const repositorie = response.data;
    setRepositories([...repositories, repositorie])

  }

  async function handleRemoveRepository(id) {
    // TODO deleta repositorios da lista
    try {
      await api.delete(`repositories/${id}`);
      alert('repositorio deletados com sucesso', repositories.id)

    } catch (err) {
      alert('Erro ao deletar repositorio.');
    }
  }

  return (
    <div>
      <h1>LISTA DE REPOSITÓRIOS</h1>
      <ul data-testid="repository-list">
        {repositories.map(repositorie => <li key={repositorie.id}> {repositorie.title} <button onClick={() => handleRemoveRepository(repositorie.id)}>dell</button> </li>)}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
