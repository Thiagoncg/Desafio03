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
    // TODO
    const response = await api.post('repositories', {
      url: "http://www.criargames.com.br",
      title: "Desafio 3",
      techs: ['teste', 'teste', 'teste'],
      likes: 0,
    })

    const repositorie = response.data;
    setRepositories([...repositories, repositorie])

  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map(repositorie => <li key={repositorie.id}> {repositorie.title} <button onClick={() => handleRemoveRepository(1)}>dell</button> </li>)}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
