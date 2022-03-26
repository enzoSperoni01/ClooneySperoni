import React from 'react';

const MovieItem = ({ label, price, id, stock}) => {
    return(
        <div key={id} className='movie-card'>
            <h2>{label}</h2>
            <h3>${price}</h3>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default MovieItem;