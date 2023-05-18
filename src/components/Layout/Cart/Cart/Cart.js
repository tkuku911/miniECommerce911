import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

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
            <div className={'mt-6 font-bold'}>Total Amount - {totalPrice} $</div>
        </div>
    )

    const cartDataEmpty = (
        <div className={'mb-4'}>
            <p>Cart is empty</p>
        </div>
    )

    return(
        <div className={'mb-12'}>
            <h3 className={'text-left font-bold text-2xl mb-6'}>Cart</h3>
            <div className='h-5/6'>
                {cartQuantity ? cartData : cartDataEmpty}
            </div>
        </div>
    )
}

export default Cart;
