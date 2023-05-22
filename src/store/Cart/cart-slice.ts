import { createSlice } from '@reduxjs/toolkit';
import { ProductInterface } from '../../interfaces/product.interface';

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
        },
        plusItemQty(state, action) {
            const id = action.payload;
            const existingItem: ProductInterface | undefined = state.items.find((item: ProductInterface) => item.id === id);
            if (existingItem) {
                state.totalQuantity++;
                existingItem.qty++;
                state.totalPrice += existingItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem: ProductInterface | undefined = state.items.find((item: ProductInterface) => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.qty;
                state.items = state.items.filter((item: ProductInterface) => item.id !== id);
                state.totalPrice -= existingItem.price * existingItem.qty;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
