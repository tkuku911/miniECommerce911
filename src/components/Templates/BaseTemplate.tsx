import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import CartModal from '../Layout/Cart/CartModal/CartModal';
import Footer from '../Layout/Footer/Footer';
import useScrollTop from '../../hooks/common/use-scroll-top';
import { uiActions } from '../../store/UI/ui-slice';
import { useEffect, useState } from 'react';
import * as localStorage from '../../services/local-storage.service';
import { cartActions } from '../../store/Cart/cart-slice';
import { LocalStorageNames } from '../../structures/enums/local-storage-names.enum';
import './BaseTemplate.scss';

function BaseTemplate() {
    const dispatch = useDispatch();
    const [firstRender, setFirstRender] = useState(false);
    const cartIsVisible = useSelector((state:any) => state.ui.cartIsVisible);

    useEffect(() => {
        if (!firstRender) {
            setFirstRender(true);
            loadCart();
        }
    }, [firstRender]);

    const loadCart = () => {
        const cart = localStorage.get(LocalStorageNames.Cart);
        if (cart) {
            dispatch(cartActions.setCartState(cart));
        }
    }

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };
    useScrollTop();

    return (
        <>
             <div className="base-template">
                 {cartIsVisible && <CartModal onClose={toggleCartHandler} />}
                 <Header />
                 <Outlet />
                 <Footer />
             </div>
         </>
    );
}

export default BaseTemplate;
