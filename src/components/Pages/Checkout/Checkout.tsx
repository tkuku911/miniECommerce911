import Cart from '../../Layout/Cart/Cart/Cart';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { CartLocations } from '../../../structures/enums/cart-locations.enum';
import TitleBlock from '../../Layout/TitleBlock/TitleBlock';
import './Checkout.scss';

const Checkout = () => {
    return(
        <>
            <TitleBlock title={'Checkout'} />
            <div className="checkout">
                <Cart type={CartLocations.Checkout} />
                <CheckoutForm />
            </div>
        </>
    )
}

export default Checkout;
