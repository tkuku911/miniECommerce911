import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './UI/ui-slice';
import cartSlice from './Cart/cart-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default store;
