import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';
import './Cart.scss';

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
            <div className="cart-quantity-value">Total Amount - {totalPrice} $</div>
        </div>
    )

    const cartDataEmpty = (
        <div className="cart-quantity-empty">
            <p>Cart is empty</p>
        </div>
    )

    return(
        <div className="cart">
            <h3>Cart</h3>
            <div className="cart-quantity">
                {cartQuantity ? cartData : cartDataEmpty}
            </div>
        </div>
    )
}

export default Cart;
