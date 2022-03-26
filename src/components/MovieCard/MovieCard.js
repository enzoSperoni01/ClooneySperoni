import React from 'react';

const MovieItem = ({ label, price, id, stock, img }) => {
    return(
        <div key={id} className='movie-card'>
            <img src={img} alt={`Poster ${label}`}></img>

            <div>
                <h2>{label}</h2>
                <h3>${price}</h3>
                <p>Stock: {stock}</p>   
            </div>

        </div>
    )
}

export default MovieItem;