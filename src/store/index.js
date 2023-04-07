import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './UI/ui-slice';
import cartSlice from './Cart/cart-slice';
import productsSlice from './Products/products-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
    },
});

export default store;
