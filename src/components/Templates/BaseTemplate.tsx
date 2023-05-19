import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import CartModal from '../Layout/Cart/CartModal/CartModal';
import Footer from '../Layout/Footer/Footer';
import useScrollTop from "../../hooks/use-scroll-top";
import { uiActions } from '../../store/UI/ui-slice';

function BaseTemplate() {
    const dispatch = useDispatch();
    const cartIsVisible = useSelector((state:any) => state.ui.cartIsVisible);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };
    useScrollTop();

    return (
        <>
             <div className={'min-h-screen'}>
                 {cartIsVisible && <CartModal onClose={toggleCartHandler} />}
                 <Header />
                 <Outlet />
                 <Footer />
             </div>
         </>
    );
}

export default BaseTemplate;
