import Cart from '../../Layout/Cart/Cart/Cart';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const Checkout = () => {
    return(
        <div className={'px-64'}>
            <h1 className={'text-center text-2xl font-black mb-5'}>Checkout</h1>
            <Cart />
            <CheckoutForm />
        </div>
    )
}

export default Checkout;
