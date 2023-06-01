import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../../UI/Button/Button';
import { cartActions } from '../../../../store/Cart/cart-slice';
import { uiActions } from '../../../../store/UI/ui-slice';
import { CartLocations } from '../../../../structures/enums/cart-locations.enum';
import './CartItem.scss';

interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    qty: number;
}

interface ICartItemProps {
    item: Item;
    type: string;
}

const CartItem: FC<ICartItemProps> = ({item, type}) => {
    const dispatch = useDispatch();
    const {id, name, qty, price} = item;
    const link = `/product/${item.id}`;

    const toggleCartHandler = () => {
        if (type === CartLocations.CartModal) {
            dispatch(uiActions.toggle());
        }
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
        <li className="cart-item">
            <div className="cart-item-name">
                <Link to={link} className="cart-item-name-link" onClick={toggleCartHandler}>
                    <h3>Name: {name}</h3>
                </Link>
            </div>
            <div className="cart-item-qty">
                <p>QTY: {qty}</p>
            </div>
            <div className="cart-item-price">
                <p>Price: {price} $</p>
            </div>
            <div className="cart-item-actions">
                <Button
                    type={'button'}
                    classes={'border-2 border-indigo-600 w-8 h-7 mr-4' + (qty < 2 ? ' disabled:opacity-25' : '')}
                    onClick={minusItem}
                    disabled={qty < 2}
                    value={'-'}>
                </Button>
                <Button
                    type={'button'}
                    classes={'border-2 border-indigo-600 w-8 h-7 mr-10' + (qty > 9 ? ' disabled:opacity-25' : '')}
                    onClick={plusItem}
                    disabled={qty > 9}
                    value={'+'}>
                </Button>
                <Button
                    type={'button'}
                    classes={'border-2 border-indigo-600 w-20 h-7'}
                    onClick={removeFromCart}
                    value={'Remove'}>
                </Button>
            </div>
        </li>
    )
}

export default CartItem;
