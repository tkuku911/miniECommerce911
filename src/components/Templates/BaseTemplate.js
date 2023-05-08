import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import { useSelector } from 'react-redux';
import React, { Fragment } from 'react';
import CartModal from '../Layout/Cart/CartModal/CartModal';
import Footer from '../Layout/Footer/Footer';

function BaseTemplate() {
    const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

    return (
        <Fragment>
             <div className={'min-h-screen'}>
                 {cartIsVisible && <CartModal />}
                 <Header />
                 <Outlet />
                 <Footer />
             </div>
         </Fragment>
    );
}

export default BaseTemplate;
