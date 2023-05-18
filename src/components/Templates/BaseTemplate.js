import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import { useSelector } from 'react-redux';
import CartModal from '../Layout/Cart/CartModal/CartModal';
import Footer from '../Layout/Footer/Footer';
import useScrollTop from "../../hooks/use-scroll-top";

function BaseTemplate() {
    const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
    useScrollTop();

    return (
        <>
             <div className={'min-h-screen'}>
                 {cartIsVisible && <CartModal />}
                 <Header />
                 <Outlet />
                 <Footer />
             </div>
         </>
    );
}

export default BaseTemplate;
