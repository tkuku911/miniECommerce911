import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

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
            <div className={'mt-6'}>Total Amount - {totalPrice} $</div>
        </div>
    )

    const cartDataEmpty = (
        <div className={'mb-4'}>
            <p>Cart is empty</p>
        </div>
    )

    return(
        <Fragment>
            <h3 className={'text-center font-bold text-2xl mb-2'}>Cart</h3>
            <div className='h-5/6'>
                {cartQuantity ? cartData : cartDataEmpty}
            </div>
        </Fragment>
    )
}

export default Cart;
