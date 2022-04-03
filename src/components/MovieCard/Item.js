import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const MovieItem = ({ label, price, id, stock, img }) => {
    return(
        <div key={id} className='movie-card'>
            <img src={img} alt={`Poster ${label}`}></img>

            <div className='movie-info'>
                <h2>{label}</h2>
                <p>Precio: ${price}</p>
            </div>

            <ItemCount className="count-item" initial={1} stock={stock} />
        </div>
    )
}

export default MovieItem;