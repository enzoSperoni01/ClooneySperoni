import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartWidget = () =>{
    const { cartList, deleteOne, emptyCart, sumaTotal } = useCartContext();

    return(
        <div className="cart-section">
            <h1>Tu carrito:</h1>
        {
            (cartList.length === 0)
            &&
            <div className="no-items">
                <p>No hay peliculas en tu carrito...</p>
                <Link to='/'>
                    <Button variant="outlined" className="button">Continuar comprando</Button>
                </Link>
            </div>
        }    
        {                    
            cartList.map( prod => (
                <div key={ prod.id } className="cart-item">
                    <div className="cart-detail">
                        <img src={prod.img} alt={`Poster ${prod.label}`}/>
                        <h2> {prod.label}</h2>
                        <p> Precio: $ {prod.price}</p>
                        <p> Cantidad: { prod.quantity}  </p>
                    </div>
                    <div className="buttons">
                        <Button 
                            variant="contained" 
                            onClick={() => deleteOne(prod.id)} 
                            color="error"
                        >
                            <DeleteForeverIcon />
                        </Button>
                    </div>
                </div>
            ))
        }
        {
            (cartList.length >= 1) &&
            <div className="cart-total">
                <h4> Total de la compra: $ {sumaTotal()} </h4>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
            </div>
        }     
        </div>
    ) 
}

export default CartWidget;