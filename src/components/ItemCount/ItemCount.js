import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../../scss/App.scss';

const ItemCount = ({initial, stock, onAdd, addFilm}) => {
    const [ count, setCount ] = useState(initial);

    const addItem = (num) => {
        setCount(count + num);
    }

    return(
        <>
            <div className='operator'>
                <Button variant="contained" className='btn-count' onClick={() => addItem(-1)} disabled={count === initial ? true : null}>-</Button>
                <p>{count}</p>
                <Button variant="contained" className='btn-count' onClick={() => addItem(1)} disabled={count === stock ? true : null}>+</Button>
            </div>
            <div>
                <Link to={'/cart'}>
                    <Button
                        variant="contained"
                        onClick={ () => {
                                const firstFunc = onAdd(count);
                                const secFunc = addFilm(count);

                                // Call
                                firstFunc();
                                secFunc();
                            }
                        }
                        disabled={stock === 0 ? true : null} 
                        endIcon={<AddShoppingCartIcon />}
                    >
                        Añadir al
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default ItemCount;