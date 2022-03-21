import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../../scss/App.scss';

const ItemCount = ({initial, stock}) => {
    const [ count, setCount ] = useState(initial);

    const decrement = () => {
        if(count > initial) setCount(count - 1);
    };
    const increment = () => {
        if(count < stock) setCount(count + 1);
    };

    return(
        <div className='Item-Compra'>
            <h2>Item</h2>
            <div className='operator'>
                <Button variant="contained" onClick={decrement}>-</Button>
                <p>{count}</p>
                <Button variant="contained" onClick={increment}>+</Button>
            </div>
            <Button variant="outlined">Comprar</Button>
            <p>Stock Actual: {stock}</p>
        </div>
    )
}

export default ItemCount;