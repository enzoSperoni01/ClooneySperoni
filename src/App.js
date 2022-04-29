// Styles
import './scss/App.scss';
import AOS from "aos";
import "aos/dist/aos.css";

// React
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import NavBar from './components/NavBar/NavBar';

// Pages
import HomeSection from './pages/HomePage';
import ProductsSection from './pages/ProductsSection';
import AboutUsSection from './pages/aboutUsPage';
import DetailItemPage from './pages/Detail';
import ContactSection from './pages/ContactSection';
import CartSection from './pages/CartPage';

// Context
import { CartContextProvider } from './Context/CartContext';

function App() {
  useEffect(() => AOS.init(), [])
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/home"} element={<HomeSection />}/>
            <Route path={"/peliculas"} element={<ProductsSection />}/>
            <Route path={"/nosotros"} element={<AboutUsSection />}/>
            <Route path="/:gender/" element={<ProductsSection />}/>
            <Route path={"/peliculas/:id"} element={<DetailItemPage />} />
            <Route path={"/contact"} element={<ContactSection />} />
            <Route path={"/cart"} element={<CartSection />}/>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        ></ToastContainer>
      </CartContextProvider>
    </div>
  );
}

export default App;