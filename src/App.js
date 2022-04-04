// Styles
import './scss/App.scss';

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components & Pages
import NavBar from './components/NavBar/NavBar';
import HomeSection from './pages/HomeSection';
import DetailItem from './pages/DetailSection';
import ContactSection from './pages/ContactSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomeSection />}/>
          <Route path={"/:category/:id"} element={<DetailItem />} />
          <Route path={"/contact"} element={<ContactSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;