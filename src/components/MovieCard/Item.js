import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

const MovieItem = ({ label, price, id, img, link }) => {

    return(
        <div key={id} className='movie-card'>
            <img src={img} alt={`Poster ${label}`}></img>

            <div className='movie-info'>
                <h2>{label}</h2>
                <p><span>Precio:</span> ${price}</p>
            </div>

            <div className='btn-sect'>
                <Link to={`/peliculas/${link}`}>
                    <Button className='btn-cart' variant="outlined"><InfoIcon className='btn-icon' /></Button>
                </Link>
            </div>
        </div>
    )
}

export default MovieItem;