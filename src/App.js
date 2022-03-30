import './scss/App.scss';
import NavBar from './components/NavBar/NavBar';
import HomeSection from './pages/HomeSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<HomeSection />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;