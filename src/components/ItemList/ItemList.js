import React, { useEffect, useState } from 'react';
import movieList from '../../info/data';   
import MovieCard from '../MovieCard/MovieCard';

const ItemList = () => {
    const [ films, setFilms ] = useState([]);

    const getFilms = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(movieList);
        }, 3500);
    });
    
    useEffect(() => {
        getMovies();
    }, []);
    
    const getMovies = async () => {
        try {
            const resultMovies = await getFilms;
            setFilms(resultMovies);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div>
            {
                films.length ? (
                    <>
                        {
                            films.map( film => {
                                const { label, price, index, stock, id } = film;
                                return(
                                    <MovieCard
                                        key={id}
                                        label={label}
                                        price={price}
                                        index={index}
                                        stock={stock}
                                    />
                                )
                            })
                        }
                    </>
                ) : (
                    <p>Cargando peliculas...</p>
                )
            }
        </div>
    )
}

export default ItemList;