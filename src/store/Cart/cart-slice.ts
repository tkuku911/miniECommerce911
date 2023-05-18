import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';

interface ICartSlice {
    items: Product[],
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
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem: Product | undefined = state.items.find((item: Product) => item.id === newItem.id);
            state.totalQuantity++;
            const product: Product = {
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
        },
        minusItemQty(state, action) {
            const id = action.payload;
            const existingItem: Product | undefined = state.items.find((item: Product) => item.id === id);
            if (existingItem) {
                state.totalQuantity--;
                if (existingItem?.qty === 1) {
                    state.items = state.items.filter((item: Product) => item.id !== id);
                } else {
                    existingItem.qty--;
                }
                state.totalPrice -= existingItem.price;
            }
        },
        plusItemQty(state, action) {
            const id = action.payload;
            const existingItem: Product | undefined = state.items.find((item: Product) => item.id === id);
            if (existingItem) {
                state.totalQuantity++;
                existingItem.qty++;
                state.totalPrice += existingItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem: Product | undefined = state.items.find((item: Product) => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.qty;
                state.items = state.items.filter((item: Product) => item.id !== id);
                state.totalPrice -= existingItem.price * existingItem.qty;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
