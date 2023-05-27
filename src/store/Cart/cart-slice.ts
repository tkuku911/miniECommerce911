import { createSlice } from '@reduxjs/toolkit';
import { ProductInterface } from '../../structures/interfaces/product.interface';
import * as localStorage from '../../services/local-storage.service';
import { LocalStorageNames } from '../../structures/enums/local-storage-names.enum';

interface ICartSlice {
    items: ProductInterface[],
    totalQuantity: number,
    totalPrice: number,
}

const initialState: ICartSlice = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCartState(state, action) {
            const cartState = action.payload;
            state.items = cartState.items;
            state.totalQuantity = cartState.totalQuantity;
            state.totalPrice = cartState.totalPrice;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem: ProductInterface | undefined = state.items.find((item: ProductInterface) => item.id === newItem.id);
            state.totalQuantity++;
            const product: ProductInterface = {
                id: newItem.id,
                price: newItem.price,
                description: newItem.description,
                qty: newItem.qty,
                totalItemPrice: newItem.price,
                title: newItem.title
            };
            if (!existingItem) {
                state.items.push(product);
            } else {
                existingItem.qty++;
                existingItem.totalItemPrice = existingItem.totalItemPrice + newItem.price;
            }
            state.totalPrice += newItem.price;
            localStorage.set(LocalStorageNames.Cart, state);
        },
        minusItemQty(state, action) {
            const id = action.payload;
            const existingItem: ProductInterface | undefined = state.items.find((item: ProductInterface) => item.id === id);
            if (existingItem) {
                state.totalQuantity--;
                if (existingItem?.qty === 1) {
                    state.items = state.items.filter((item: ProductInterface) => item.id !== id);
                } else {
                    existingItem.qty--;
                }
                state.totalPrice -= existingItem.price;
            }
            localStorage.set(LocalStorageNames.Cart, state);
        },
        plusItemQty(state, action) {
            const id = action.payload;
            const existingItem: ProductInterface | undefined = state.items.find((item: ProductInterface) => item.id === id);
            if (existingItem) {
                state.totalQuantity++;
                existingItem.qty++;
                state.totalPrice += existingItem.price;
            }
            localStorage.set(LocalStorageNames.Cart, state);
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem: ProductInterface | undefined = state.items.find((item: ProductInterface) => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.qty;
                state.items = state.items.filter((item: ProductInterface) => item.id !== id);
                state.totalPrice -= existingItem.price * existingItem.qty;
            }
            localStorage.set(LocalStorageNames.Cart, state);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
