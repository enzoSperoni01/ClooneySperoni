import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/Item.js';
import CircularProgress from '@mui/material/CircularProgress';

// Firebase
import dataBase from '../../firebase';
import { collection, getDocs } from 'firebase/firestore'; 

const ItemList = () => {
    const [ films, setFilms ] = useState([]);

    const { gender } = useParams();

    // Firestore
    const getFilms = async () => { 
        const filmsCollection = collection(dataBase, 'peliculas');
        const filmsSnapshot = await getDocs(filmsCollection);
        const filmList = filmsSnapshot.docs.map((doc) => {
                let movie = doc.data();
                movie.id = doc.id;

                return movie;
            }
        );

        return filmList;
    };

    useEffect(() => {
        setFilms([]);
        getFilms().then( film => gender ? filterByGender(film, gender) : setFilms(film));
    }, [gender]);

    const filterByGender = (array , gender) => {
        return array.map( (product, i) => {
            if(product.gender === gender) {
                return setFilms(products => [...products, product]);
            }
        })
    }

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