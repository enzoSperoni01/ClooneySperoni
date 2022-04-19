import React, { useState, useEffect } from 'react';
import movieList from '../../info/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import LinearIndeterminate from '../LinearLoading/Loading'

const ItemDetailContainer = ({ id }) => {
    const [ film, setFilm ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getItem = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout( () => resolve(movieList), 2000)
        })
        let result = promise;
        return result;
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 3000)
        getItem()
            .then( data => {
                const finded = data.find(element => element.id == id);
                setFilm(finded);
            } );
    }, []);

    return(
        <>
            <div className="Detail-Container">
                {
                    loading ? (
                        <>
                            <h2>Detalle de la Pelicula:</h2>
                            <ItemDetail item={film}/>
                        </>
                    ) : (
                        <div className='circular-progress'>
                            <LinearIndeterminate />
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default ItemDetailContainer;