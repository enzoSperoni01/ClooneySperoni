import React from 'react';
import ListMovies from '../components/ItemListContainer/ListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const HomeSection = () => {
    return(
        <>
            <ListMovies>
                <p>Listado de Peliculas</p>
            </ListMovies>
            {/* <ItemDetailContainer /> */}
        </>
    )
}

export default HomeSection;