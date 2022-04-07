import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => { 
    const { id, label, price, gender, stock, initial, img, parragraph } = item;

    const [ prodAdd, setProd ] = useState(0);
    const addFilm = (cant) => {
        setProd(cant + prodAdd);
        console.log(cant);
    }

    const onAdd = (num) => {
        alert(`Has añadido ${num} películas!`)
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

                <div className="actions">
                    <ItemCount initial={initial} stock={stock} onAdd={onAdd} addFilm={addFilm} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;