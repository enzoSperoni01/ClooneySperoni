import './scss/App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemCount stock={5} initial={1}/>
      <ItemCount stock={10} initial={1}/>
    </div>
  );
}

export default App;