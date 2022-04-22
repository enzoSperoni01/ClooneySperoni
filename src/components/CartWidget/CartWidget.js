import { useCartContext } from '../../Context/CartContext';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import '../../scss/App.scss';

const CartWidget = () => {
    const { quantity, cartList } = useCartContext()

    return(
        <Button className='btn-cart'>
            <ShoppingCartRoundedIcon className='cart-icon' />
            <p>
                { cartList.length > 0 ? quantity() : 0}
            </p>
        </Button>
    )
}

export default CartWidget;