import React from 'react';
import ListMovies from '../components/ItemListContainer/ListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const HomeSection = () => {
    return(
        <>
            <ListMovies>
                <p>Peliculas de Drama</p>
            </ListMovies>
            <ItemDetailContainer />
        </>
    )
}

export default HomeSection;