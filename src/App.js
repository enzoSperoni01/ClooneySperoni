import './scss/App.scss';
import NavBar from './components/NavBar/NavBar';
import ListMovies from './components/ItemListContainer/ListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListMovies>
        <p>Peliculas de Drama</p>
      </ListMovies>
    </div>
  );
}

export default App;