import Button from '@mui/material/Button';
import '../App.css';

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
        </div>
    );
}

export default NavBar;