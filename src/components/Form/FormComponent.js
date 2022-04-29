import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

const Form = () => {
    return(
        <>
            <Container data-aos="fade-up" data-aos-duration="1000" className="contact-section" maxWidth="md">
                <h1 className="h1-contact">Clooney | Contacto</h1>
                <form className="form-contact">
                    <div className="form-div">
                        <TextField
                            fullWidth 
                            helperText="Escribe tu nombre y apellido"
                            id="demo-helper-text-aligned"
                            label="Nombre y Apellido"
                        />
                    </div>
                    <div className="form-div">
                        <TextField
                            type="email"
                            fullWidth 
                            helperText="Escribe tu correo electronico"
                            id="demo-helper-text-aligned"
                            label="Correo Electronico"
                        />
                    </div>
                    <TextField
                        className="form-div"
                        id="outlined-multiline-static"
                        label="Mensaje"
                        helperText="Escribe tu mensaje"
                        multiline
                        rows={4}
                    />
                    <Button type="submit" variant="contained" color="success">Enviar</Button>
                </form>
            </Container>
        </>
    )
}

export default Form;