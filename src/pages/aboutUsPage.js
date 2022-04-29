import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const AboutUsSection = () => {
    return(
        <>
            <Container className="about-section" maxWidth="lg">
                <h1>Sobre Nosotros</h1>

                <div className="container">
                    <div className="div-section">
                        <p>Nos apasiona el cine tanto como a vos<br/> Es por eso que creamos <span>Clooney</span></p>
                    </div>
                    <div className="div-section">
                        <p>Nuestro objetivo es lograr contagiar esta pasión con mas personas</p>
                        <p>Tenemos las mejores peliculas de cada genero a nuestra<br/> disposicion en nuestra <Link to={'/peliculas'}>Lista de Peliculas</Link></p>
                    </div>
                </div>

                <p>Si deseas contactarte con nosotros, no dudes en ir a la seccion de <Link to={'/contact'}>Contacto</Link></p>
            </Container>
        </>
    )
};

export default AboutUsSection;