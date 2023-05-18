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
        <li className={'flex flex-row justify-start mb-2'}>
            <div className={'w-[40%]'}>
                <Link to={link} className={'list'} onClick={toggleCartHandler}>
                    <h3>Name: {title}</h3>
                </Link>
            </div>
            <div className={'w-[10%]'}>
                <p>QTY: {qty}</p>
            </div>
            <div className={'w-[15%]'}>
                <p>Price: {price} $</p>
            </div>
            <div className={'w-[35%]'}>
                <Button
                    classes={'border-2 border-indigo-600 w-8 h-7 mr-4' + (qty < 2 ? ' disabled:opacity-25' : '')}
                    onClick={minusItem}
                    disabled={qty < 2}
                    value={'-'}>
                </Button>
                <Button
                    classes={'border-2 border-indigo-600 w-8 h-7 mr-10' + (qty > 9 ? ' disabled:opacity-25' : '')}
                    onClick={plusItem}
                    disabled={qty > 9}
                    value={'+'}>
                </Button>
                <Button
                    classes={'border-2 border-indigo-600 w-20 h-7'}
                    onClick={removeFromCart}
                    value={'Remove'}>
                </Button>
            </div>
        </li>
    )
}

export default CartItem;
