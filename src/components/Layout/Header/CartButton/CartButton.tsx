import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../../store/UI/ui-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartButton.scss';


const CartButton = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return(
        <>
            <div onClick={toggleCartHandler} className="cart-button">
                <div className="cart-button-icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                <div className="cart-button-qty">{cartQuantity ? cartQuantity : ''}</div>
            </div>
        </>
    )
}

export default CartButton;
