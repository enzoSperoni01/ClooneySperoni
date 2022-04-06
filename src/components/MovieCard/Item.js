import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ItemCount from '../ItemCount/ItemCount';

const MovieItem = ({ label, price, id, stock, img }) => {
    return(
        <div key={id} className='movie-card'>
            <img src={img} alt={`Poster ${label}`}></img>

            <div className='movie-info'>
                <h2>{label}</h2>
                <p><span>Precio:</span> ${price}</p>
            </div>

            {/* <ItemCount className="count-item" initial={1} stock={stock} /> */}

            <div className='btn-sect'>
                <Button className='btn-cart' variant="contained"><AddShoppingCartIcon className='btn-icon' /></Button>
                <Link to={`/peliculas/${id}`}><Button className='btn-cart' variant="outlined"><InfoIcon className='btn-icon' /></Button></Link>
            </div>
        </div>
    )
}

export default MovieItem;