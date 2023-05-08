import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../../UI/Button/Button';
import { cartActions } from '../../../../store/Cart/cart-slice';
import { uiActions } from '../../../../store/UI/ui-slice';

interface Item {
    id: string;
    title: string;
    description: string;
    price: number;
    qty: number;
}

interface ICartItemProps {
    item: Item;
}

const CartItem: FC<ICartItemProps> = ({item}) => {
    const dispatch = useDispatch();
    const {id, title, qty, price} = item;
    const link = `/product/${item.id}`;

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

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
            <Link to={link} className={'list'} onClick={toggleCartHandler}>
                <h3>Name: {title}</h3>
            </Link>
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
