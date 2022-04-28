import React from 'react';
import ItemList from "../ItemList/ItemList";
import '../../scss/App.scss';

const ListMovies = ({children}) => {
    return(
        <div className="container-items">
            <h2>{children}</h2>
            <ItemList />
        </div>
    )
}

export default ListMovies;