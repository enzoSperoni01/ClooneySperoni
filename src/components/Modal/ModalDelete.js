import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useCartContext } from "../../Context/CartContext";

export default function ResponsiveDialog() {
    const { emptyCart } = useCartContext();
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseAndEmpty = () => {
        setOpen(false);
        emptyCart();
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="error" onClick={handleClickOpen}>
                Vaciar Carrito
            </Button>
            <Dialog
                className="modal"
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                {(
                    <h2>Seguro/a que quieres vaciar el carrito?</h2>
                )}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <h3>
                            Si eliminas las peliculas añadidas,<br /> deberas volver a cargarlas
                        </h3>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" className="btn-modal" color="error" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="outlined" className="btn-modal" onClick={handleCloseAndEmpty}>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
