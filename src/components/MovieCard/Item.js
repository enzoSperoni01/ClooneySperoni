import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../Context/CartContext';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

const MovieItem = ({ label, price, id, img, link }) => {
    const { cartFilms, addFilmToCart } = useContext(CartContext);

    useEffect(() => {
        console.log('Cart Films: ' + cartFilms);
    }, [])

    const addToCart = e => {
        e.stopPropagation();
        addFilmToCart();
    }

    return(
        <div key={id} className='movie-card'>
            <img src={img} alt={`Poster ${label}`}></img>

            <div className='movie-info'>
                <h2>{label}</h2>
                <p><span>Precio:</span> ${price}</p>
            </div>

            <div className='btn-sect'>
                <Button className='btn-cart' onClick={addToCart} variant="contained"><AddShoppingCartIcon className='btn-icon' /></Button>
                <Link to={`/peliculas/${link}`}>
                    <Button className='btn-cart' variant="outlined"><InfoIcon className='btn-icon' /></Button>
                </Link>
            </div>
        </div>
    )
}

export default MovieItem;