import Cart from '../../Layout/Cart/Cart/Cart';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { CartLocations } from "../../../enums/cart-locations.enum";
import TitleBlock from "../../Layout/TitleBlock/TitleBlock";

const Checkout = () => {
    return(
        <>
            <TitleBlock title={'Checkout'} />
            <div className={'px-64 min-h-[88vh]'}>
                <Cart type={CartLocations.Checkout} />
                <CheckoutForm />
            </div>
        </>
    )
}

export default Checkout;
