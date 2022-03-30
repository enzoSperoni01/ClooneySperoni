import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
import '../../scss/App.scss';

const ItemDetailContainer = () => {
    const FilmMocky = {
        id: 4,
        title: "Spider Man No Way Home",
        gender: "Action",
        price: 75,
        stock: 6,
        initial: 1,
        url: "https://cdn.atomix.vg/wp-content/uploads/2021/11/spider-man-no-way-home-villains-poster.jpg",
        parragraph: "Con la identidad de Spider-Man ahora revelada, Peter recurre al Doctor Strange en busca de ayuda. Algo sale mal y el multiverso se convierte en la mayor amenaza. Ahora Peter debe descubrir qué significa realmente ser Spider-Man."
    }

    const [ film, setFilm ] = useState([]);

    const getItem = async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(FilmMocky), 2000);
        })
        let result = await promise;
        return result;
    };

    useEffect(() => {
        getItem()
            .then( data => setFilm(data) )
            .finally('Fin de la llamada');
    })
    return(
        <div className="Detail-Container">
            <h2>Detalle de la Pelicula:</h2>
            <ItemDetail item={film}/>
        </div>
    );
}

export default ItemDetailContainer;