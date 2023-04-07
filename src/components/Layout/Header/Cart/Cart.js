import Modal from '../../../UI/Modal/Modal';
import CartItem from '../../../Pages/Blocks/CartItem/CartItem';
import Button from '../../../UI/Button/Button';
import { uiActions } from '../../../../store/UI/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    const cartItemsBlock = (
        <ul className={''}>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    );

    const cartData = (
        <div>
            {cartItemsBlock}
            <div className={'mt-6'}>Total Amount - {totalPrice} $</div>
        </div>
    )

    const cartDataEmpty = (
        <div className={'mb-4'}>
            <p>Cart is empty</p>
        </div>
    )

    return(
        <Modal onClose={props.onClose}>
            <div className={'flex flex-col h-full'}>
                <h3 className={'text-center font-bold text-2xl mb-2'}>Cart</h3>
                <div className='h-5/6'>
                    {cartQuantity ? cartData : cartDataEmpty}
                </div>
                <div className=''>
                    <Button
                        classes={'border border-slate-400 rounded p-2 mr-2'}
                        onClick={toggleCartHandler}
                        value={'Close'}>
                    </Button>
                    <Button
                        classes={'border border-slate-400 rounded p-2'}
                        value={'Order'}>
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;
