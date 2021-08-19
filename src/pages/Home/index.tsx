import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Desafio Github API</h1>
            <p>Bootcamp Spring React - DevSuperior</p>
            <a href="/gitsearch">
              <button className="btn btn-primary btn-lg start-button">
                <p>Começar</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
