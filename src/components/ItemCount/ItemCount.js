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
        <>
            <div className='operator'>
                <Button variant="contained" className='btn-count' onClick={decrement}>-</Button>
                <p>{count}</p>
                <Button variant="contained" className='btn-count' onClick={increment}>+</Button>
            </div>
        </>
    )
}

export default ItemCount;