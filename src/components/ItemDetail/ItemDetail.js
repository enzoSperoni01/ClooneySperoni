import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import DisableElevation from '../ButtonGroup/Buttons';

const ItemDetail = ({ item }) => { 
    const { id, label, price, gender, stock, initial, img, parragraph } = item;
    const { agregarAlCarrito } = useCartContext();

    const [ click, setClick ] = useState(true);
    const [ contador, setContador ] = useState(0)
    const [ prodAdd, setProd ] = useState(0);

    const addFilm = (cant) => {
        setProd(cant + prodAdd);
        console.log(cant);
    }

    const onAdd = (num) => {
        let frase = num === 1 ? `Has añadido al carrito la película ${label}!` : `Has añadido ${num} películas de: ${label}!` 
        toast.success(frase, {
            theme: "colored",
            position: "bottom-center",
            autoClose: 2300,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

        const result = num * price;
        if(num > 0) {
            setClick(!click);
            setProd(result);
        }
        setContador(num)
        agregarAlCarrito( {...item, quantity: num} )
    }

    return(
        <div key={id} className='Card-Detail'>
            <img src={img} alt={`Poster ${label}`}/>

            <div className='info'>
                <div className="info__text">
                    <h2>{label}</h2>
                    <h3>Genero: {gender}</h3>
                    <h3>Precio: $ {price}</h3>
                    <p><span>Sinopsis:</span> {parragraph}</p>
                </div>

                {
                    click ? (
                        <div className="actions">
                            <ItemCount initial={initial} stock={stock} onAdd={onAdd} addFilm={addFilm} />
                        </div>
                    ) : (
                        <DisableElevation />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;