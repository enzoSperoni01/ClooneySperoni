// Styles
import './scss/App.scss';

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar';

// Pages
import HomeSection from './pages/HomeSection';
import DetailItemPage from './pages/Detail';
import ContactSection from './pages/ContactSection';
import CartSection from './pages/CartPage';

// Context
import { CartContextProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<HomeSection />}/>
            <Route path={"/peliculas/:link"} element={<DetailItemPage />} />
            <Route path={"/contact"} element={<ContactSection />} />
            <Route path={"/cart"} element={<CartSection />}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;