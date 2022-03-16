import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import '../../scss/App.scss';

const NavBar = () => {
    return (
        <div className='navbar'>
            <h2>Brand</h2>

            <nav>
                <ul>
                    <li><Button>Inicio</Button></li>
                    <li><Button>Nosotros</Button></li>
                    <li><Button>Contacto</Button></li>
                </ul>
            </nav>

            <CartWidget />
        </div>
    );
}

export default NavBar;