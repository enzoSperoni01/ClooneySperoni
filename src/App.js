// Styles
import './scss/App.scss';

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components & Pages
import NavBar from './components/NavBar/NavBar';

import HomeSection from './pages/HomeSection';
import DetailItemPage from './pages/Detail';
import ContactSection from './pages/ContactSection';
import CartSection from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomeSection />}/>
          <Route path={"/peliculas/:link"} element={<DetailItemPage />} />
          <Route path={"/contact"} element={<ContactSection />} />
          <Route path={"/cart"} element={<CartSection />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;