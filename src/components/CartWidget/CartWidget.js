import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import '../../scss/App.scss';

const CartWidget = () => {
    return(
        <Button className='btn-cart'>
            <ShoppingCartRoundedIcon className='cart-icon' />
            <p>4</p>
        </Button>
    )
}

export default CartWidget;