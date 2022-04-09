import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ViewListIcon from '@mui/icons-material/ViewList';

const DisableElevation = () => {
    return (
        <div className='btn-group'>
            <Link to="/cart">
                <Button variant="outlined" endIcon={<ShoppingCartCheckoutIcon />}>Ir al carrito</Button>
            </Link>
            <Link to="/">
                <Button variant="outlined" endIcon={<ViewListIcon />}>Ver las peliculas</Button>
            </Link>
        </div>
    );
}

export default DisableElevation