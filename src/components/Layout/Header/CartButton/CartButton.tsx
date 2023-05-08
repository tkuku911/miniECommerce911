import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../../store/UI/ui-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartButton = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return(
        <div>
            <div onClick={toggleCartHandler} className={'flex flex-row cursor-pointer'}>
                <div className={'text-purple-700'}><FontAwesomeIcon icon={faShoppingCart} /></div>
                <div className={'text-gray-500 text-xs ml-1'}>{cartQuantity ? cartQuantity : ''}</div>
            </div>
        </div>
    )
}

export default CartButton;
