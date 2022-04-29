import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../scss/App.scss';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleToggleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleToggleClose = () => {
        setAnchorEl(null);
    };

    const pages = [
        {
            id: 1,
            title:'Inicio',
            url: '/home'
        },
        {
            id: 2,
            title:'Peliculas',
            url: '/'
        }, 
        {
            id: 3,
            title:'Nosotros',
            url: '/nosotros'
        },
        {
            id: 4,
            title: 'Contacto',
            url: '/contact'
        }
    ]

    return (
        <div className='navbar'>
            <Link to={'/home'} className='link-style'><h2>Clooney</h2></Link>

            <nav>
                <ul>
                {pages.map( page => {
                    return(
                        page.title === 'Peliculas' ? (
                        <li key={page.id}>
                            <Button 
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleToggleClick}
                            >{page.title}</Button>
                            <Menu
                                id="fade-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleToggleClose}
                                MenuListProps={{
                                'aria-labelledby': 'fade-button',
                                }}
                            >
                                <MenuItem onClick={handleToggleClose} className='menu-item'>
                                    <Link to={'/peliculas'} className="menu-link">Todas</Link>
                                </MenuItem>
                                <MenuItem onClick={handleToggleClose} className='menu-item'>
                                    <Link to={'/Accion'} className="menu-link">Acción</Link>
                                </MenuItem>
                                <MenuItem onClick={handleToggleClose} className='menu-item'>
                                    <Link to={'/Drama'} className="menu-link">Drama</Link>
                                </MenuItem>
                            </Menu> 
                        </li>
                        ) : (
                        <li key={page.id}>
                            <Button>
                                <Link to={page.url} className="link-style">{page.title}</Link>
                            </Button>
                        </li>
                        )
                    )
                })}
                </ul>
            </nav>

            <Link to={'/cart'}>
                <CartWidget clasName='btn-cart' />
            </Link>
        </div>
    );
}

export default NavBar;