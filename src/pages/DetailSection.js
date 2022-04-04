import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ItemCount from '../components/ItemCount/ItemCount';
import '../scss/App.scss';
import movieList from '../info/data';

const DetailItem = () => {
    const { id, category } = useParams();
    const [ film, setFilm ] = useState({});

    useEffect(() => {
        filterMovie(movieList, id);
    }, [id])

    const filterMovie = (array, id) => {
        return array.map( movie => {
            if(id === movie.id) return setFilm(film);
        })
    };

    return(
        <div key={film.id} className='Card-Detail'>
            <img src={film.url} alt={`Poster ${film.label}`}/>

            <div className='info'>
                <div className="info__text">
                    <h2>{film.label}</h2>
                    <h3>Genero: {film.gender}</h3>
                    <h3>Precio: $ {film.price}</h3>
                    <p><span>Sinopsis:</span> {film.parragraph}</p>
                </div>

                <div className="actions">
                    <ItemCount initial={film.initial} stock={film.stock} />
                    <Button variant="contained">Añadir al carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default DetailItem;