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
                <Button variant="contained" className='btn-count' onClick={decrement} disabled={count === initial ? true : null}>-</Button>
                <p>{count}</p>
                <Button variant="contained" className='btn-count' onClick={increment} disabled={count === stock ? true : null}>+</Button>
            </div>
        </>
    )
}

export default ItemCount;