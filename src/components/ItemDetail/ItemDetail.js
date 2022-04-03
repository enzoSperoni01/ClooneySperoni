import React from 'react';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => { 
    const { id, title, price, gender, stock, initial, url, parragraph } = item;

    return(
        <div key={id} className='Card-Detail'>
            <img src={url} alt={`Poster ${title}`}/>

            <div className='info'>
                <div className="info__text">
                    <h2>{title}</h2>
                    <h3>Genero: {gender}</h3>
                    <h3>Precio: $ {price}</h3>
                    <p><span>Sinopsis:</span> {parragraph}</p>
                </div>

                <div className="actions">
                    <ItemCount initial={initial} stock={stock} />
                    <Button variant="contained">Añadir al carrito</Button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail;