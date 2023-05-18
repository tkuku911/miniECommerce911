import Cart from '../../Layout/Cart/Cart/Cart';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const Checkout = () => {
    return(
        <>
            <div className={'bg-purple-900 p-24 mb-10'}>
                <h1 className={'text-center text-5xl font-black text-white'}>Checkout</h1>
            </div>
            <div className={'px-64 min-h-[88vh]'}>

                <Cart />
                <CheckoutForm />
            </div>
        </>
    )
}

export default Checkout;
