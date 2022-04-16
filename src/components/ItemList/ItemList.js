import React, { useEffect, useState } from 'react';
import movieList from '../../info/data';   
import MovieCard from '../MovieCard/Item.js';
import CircularProgress from '@mui/material/CircularProgress';

const ItemList = () => {
    const [ films, setFilms ] = useState([]);

    const getFilms = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(movieList);
        }, 3500);
    });

    useEffect(() => {
        getFilms.then().then( movies => setFilms(movies));
    }, []);

    return(
        <div className="container-movies">
            {
                films.length ? (
                    <>
                        {
                            films.map( film => {
                                return <MovieCard item={film} />
                            })
                        }
                    </>
                ) : (
                    <CircularProgress />
                )
            }
        </div>
    )
}

export default ItemList;