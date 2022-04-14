import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalDelete from '../components/Modal/ModalDelete';

const CartWidget = () =>{
    const { cartList, deleteOne, emptyCart, sumaTotal } = useCartContext();

    return(
        <div className="cart-section">
            <h1>Tu carrito:</h1>
        {
            (cartList.length === 0)
            &&
            <div className="no-items">
                <p>No hay <span>peliculas</span> en tu carrito...</p>
                <Link to='/'>
                    <Button variant="outlined" className="button">Continuar comprando</Button>
                </Link>
            </div>
        }
            <div className="film-cart"> 
                <div className="film-container">
                    {                    
                        cartList.map( prod => (
                            <div key={ prod.id } className='cart-item'>
                                <div className="cart-detail">
                                    <img src={prod.img} alt={`Poster ${prod.label}`}/>
                                    <div className="info">
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
                            </div>
                        ))
                    }
                </div>
                {
                (cartList.length >= 1) &&
                <div className="cart-total">
                    <h2> TOTAL: ${sumaTotal()} </h2>
                    <div className="total-buttons">
                        <Button variant="contained" color="success" onClick={emptyCart}>Comprar</Button>
                        <ModalDelete />
                    </div>
                </div>
                }   
            </div>   
        </div>
    ) 
}

export default CartWidget;