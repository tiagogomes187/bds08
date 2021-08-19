import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  login: string;
};

type PerfilGit = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [perfilGit, setPerfilGit] = useState<PerfilGit>();

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setPerfilGit(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setPerfilGit(undefined);
        console.log(error);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="search-input"
              placeholder="Enter your GitHub user"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>

        <div className="git-card-result-content">
          <div className="git-card-img">
            {perfilGit && (
              <img src={perfilGit?.avatar_url} alt="Foto do perfil Github" />
            )}
          </div>
          <div className="git-card-result">
            <h5>Informações</h5>
            {perfilGit && (
              <>
                <ResultCard title="Perfil:" description={perfilGit.url} />
                <ResultCard
                  title="Seguidores:"
                  description={perfilGit.followers}
                />
                <ResultCard
                  title="Localidade:"
                  description={perfilGit.location}
                />
                <ResultCard title="Nome:" description={perfilGit.name} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitSearch;
