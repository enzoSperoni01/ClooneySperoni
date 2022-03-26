import React, { useEffect, useState } from 'react';
import movieList from '../../info/data';   
import MovieCard from '../MovieCard/MovieCard';
import CircularProgress from '@mui/material/CircularProgress';

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
        <div className="container-movies">
            {
                films.length ? (
                    <>
                        {
                            films.map( film => {
                                const { label, img, price, stock, id } = film;
                                return(
                                    <MovieCard
                                        key={id}
                                        label={label}
                                        price={price}
                                        stock={stock}
                                        img={img}
                                    />
                                )
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