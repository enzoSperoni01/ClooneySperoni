import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import '../../scss/App.scss';

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to={'/'} className='link-style'><h2>Clooney</h2></Link>

            <nav>
                <ul>
                    <li>
                        <Link to={'/'} className='link-style'><Button>Inicio</Button></Link>
                    </li>
                    <li>
                        <Button>Nosotros</Button>
                    </li>
                    <li>
                        <Link to={'/contact'} className='link-style'><Button>Contacto</Button></Link>
                    </li>
                </ul>
            </nav>

            <Link to={'/cart'}>
                <CartWidget />
            </Link>
        </div>
    );
}

export default NavBar;