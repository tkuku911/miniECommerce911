import Button from '../../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/Cart/cart-slice';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const {id, title, qty, price} = props.item;

    const removeFromCart = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    const minusItem = () => {
        dispatch(cartActions.minusItemQty(id));
    };

    const plusItem = () => {
        dispatch(cartActions.plusItemQty(id));
    };

    return(
        <div className={'flex flex-row justify-around mb-4'}>
            <h3>Name: {title}</h3>
            <p>QTY: {qty}</p>
            <p>Price: {price} $</p>
            <Button
                classes={'border-2 border-indigo-600 w-10 h-7 mt-1' + (qty < 2 ? ' disabled:opacity-25' : '')}
                onClick={minusItem}
                disabled={qty < 2}
                value={'-'}>
            </Button>
            <Button
                classes={'border-2 border-indigo-600 w-10 h-7 mt-1' + (qty > 9 ? ' disabled:opacity-25' : '')}
                onClick={plusItem}
                disabled={qty > 9}
                value={'+'}>
            </Button>
            <Button
                classes={'border-2 border-indigo-600 w-20 h-7 mt-1'}
                onClick={removeFromCart}
                value={'Remove'}>
            </Button>
        </div>
    )
}

export default CartItem;
