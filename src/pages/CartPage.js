import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalDelete from '../components/Modal/ModalDelete';
import ModalCustom from '../components/ModalDialog/Modal';
import dataBase from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const CartWidget = () =>{
    const { cartList, deleteOne, emptyCart, sumaTotal } = useCartContext();
    const [ openModal, setOpenModal ] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [ order, setOrder ] = useState(
        {
            buyer: formData,
            items: cartList.map( (cartProduct) => {
                return{
                    id: cartProduct.id,
                    title: cartProduct.label,
                    price: cartProduct.price
                }
            }),
            date: new Date(),
            total: sumaTotal()
        }
    );

    const [ successOrder, setSuccessOrder ] = useState();

    const handleChange = (e) => {
        const {value, name} = e.target;

        setFormData({
            ...formData,
            [ name ]: value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let structureOrder = {...order, buyer: formData};
        setOrder(structureOrder);
        await enviarOrden(structureOrder);
        emptyCart();
    }

    const enviarOrden = async (prevOrder) => {
        const orderFirestore = collection(dataBase, "ordenes");
        const orderDocument = await addDoc(orderFirestore, prevOrder);
        console.log("Order Document: ", orderDocument.id);
        setSuccessOrder(orderDocument.id);
    }

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
                        <Button variant="contained" color="success" onClick={ () => setOpenModal(true)}>Comprar</Button>
                        <ModalDelete />
                    </div>
                </div>
                }   
            </div>   

            
            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                {
                    successOrder ? (
                        <div>
                            <h2>Orden realizada!</h2>
                            <h3>Tu orden generada es: {successOrder}</h3>
                        </div>
                    ) : (
                        <>
                            <h2>Formulario de Usuario</h2>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Escribe tu nombre y apellido..." 
                                    onChange={handleChange} 
                                    value={formData.name}
                                />
                                <br />
                                <input 
                                    type="number" 
                                    name="phone" 
                                    placeholder="Escribe tu telefono..." 
                                    onChange={handleChange} 
                                    value={formData.phone}
                                />
                                <br />
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Escribe tu email..." 
                                    onChange={handleChange} 
                                    value={formData.email}
                                />
                                <br />

                                <Button variant="outlined" type="submit">Enviar</Button>
                            </form>
                        </>
                    )
                }
            </ModalCustom>
        </div>
    ) 
}

export default CartWidget;