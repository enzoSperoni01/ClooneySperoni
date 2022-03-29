import './scss/App.scss';
import NavBar from './components/NavBar/NavBar';
import ListMovies from './components/ItemListContainer/ListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListMovies>
        <p>Peliculas de Drama</p>
      </ListMovies>
      <ItemDetailContainer />
    </div>
  );
}

export default App;