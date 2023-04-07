import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Product from '../components/Pages/Product/Product';
import Checkout from '../components/Pages/Checkout/Checkout';
import Error from '../components/Pages/Error/Error';
import BaseTemplate from '../components/Templates/BaseTemplate';

export const router = createBrowserRouter([
    {
        element: (
            <BaseTemplate />
        ),
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
            {
                path: '/checkout',
                element: <Checkout />,
            },
        ],
    },
]);
