import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"

const CartWidget = () =>{
    const { cartList, deleteOne, emptyCart, sumaTotal } = useCartContext();

    return(
        <div>
            <h1>Carrito:</h1>
        {
            (cartList.length === 0)
            &&
            <div>
                <p>No hay items en tu carrito...</p>
                <Link to='/'>
                    <button>Continuar comprando</button>
                </Link>
            </div>
            
        }    
        {                    
            cartList.map( prod => (
                <div key={ prod.id } className="row">
                    <div className="col-md-4">
                        <img src={prod.img} alt={`Poster ${prod.label}`}/>
                        <h2> {prod.label}</h2>
                        <p> Precio: $ {prod.price}</p>
                        <p> Cantidad: { prod.cantidad}  </p>
                    </div>
                    <div className="col-md-4">
                    
                        <button className="btn-sm btn-danger"
                                onClick={() => deleteOne(prod.id)}
                        >
                            Eliminar
                        </button>
                    
                    </div>
                </div>
            ))
        }
        {
            (cartList.length >= 1) &&
            <div>
                <h4> Total de la compra: {sumaTotal()} </h4>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
            </div>
        }     
        </div>
    ) 
}

export default CartWidget