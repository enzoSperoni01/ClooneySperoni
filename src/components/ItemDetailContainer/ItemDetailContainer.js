import React, { useState, useEffect } from 'react';
import movieList from '../../info/data';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {
    const [ film, setFilm ] = useState({});

    const getItem = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout( () => resolve(movieList), 2000)
        })
        let result = promise;
        return result;
    };

    useEffect(() => {
        getItem()
            .then( data => {
                const finded = data.find(element => element.id == id);
                setFilm(finded);
            } );
    }, []);

    return(
        <div className="Detail-Container">
            <h2>Detalle de la Pelicula:</h2>
            <ItemDetail item={film}/>
        </div>
    );
}

export default ItemDetailContainer;