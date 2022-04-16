// Styles
import './scss/App.scss';

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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