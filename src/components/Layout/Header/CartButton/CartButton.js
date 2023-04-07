import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../../store/UI/ui-slice';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return(
        <div>
            <h1 className={'text-white'} onClick={toggleCartHandler}>Cart {cartQuantity ? cartQuantity : ''}</h1>
        </div>
    )
}

export default CartButton;
