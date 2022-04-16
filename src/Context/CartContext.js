import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const agregarAlCarrito = (item, message) => {
        if ( isInCart(item.id) ) {
            const prod = cartList.find((p) => p.id === item.id);
            const { quantity } = prod;

            prod.quantity = item.quantity + quantity;
            const newCart = [ ...cartList ];
            setCartList(newCart);
        } else {
            setCartList([ ...cartList, item])
        }
    }

    const emptyCart = () => {
        setCartList([]);
    }

    const isInCart = (id) =>{
        return cartList.some( prod => prod.id === id);
    }

    const deleteOne = (id) => {
        setCartList(cartList.filter(p => p.id !== id));
    }

    const sumaTotal = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.quantity), 0);
    }

    const quantity = () => {
        return cartList.reduce((acum, item) => acum += item.quantity, 0)
    } 

    const data = {
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne,
        sumaTotal,
        quantity
    };

    return (
        <CartContext.Provider value={data}>
            { children }
        </CartContext.Provider>
    )
};