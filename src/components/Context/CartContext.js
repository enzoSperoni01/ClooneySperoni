import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartFilms, setCartFilms] = useState([]);

    const addFilmToCart = film => {
        console.log("prod a agregar: " + film);
    }

    const data = {
        cartFilms,
        addFilmToCart
    }

    return(
        <CartContext.Provider value={data}>
            { children }
        </CartContext.Provider>
    )
};

export { CartProvider };
export default CartContext;