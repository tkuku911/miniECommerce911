import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';

interface ICartProps {
    type: string;
}

const Cart: FC<ICartProps> = ({type}) => {
    const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);
    const cartItems = useSelector((state: any) => state.cart.items);
    const totalPrice = useSelector((state: any) => state.cart.totalPrice);

    const cartItemsBlock = (
        <ul className={''}>
            {cartItems.map((item: ProductInterface) => (
                <CartItem
                    key={item.id}
                    item={item}
                    type={type}
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
