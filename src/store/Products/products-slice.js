import { createSlice } from '@reduxjs/toolkit';

const PRODUCTS = [
    {
        id: '1',
        title: 'Card 1',
        price: 32,
        qty: 1
    },
    {
        id: '2',
        title: 'Card 2',
        price: 40,
        qty: 1
    },
    {
        id: '3',
        title: 'Card 3',
        price: 50,
        qty: 1
    },
    {
        id: '4',
        title: 'Card 4',
        price: 15,
        qty: 1
    },
    {
        id: '5',
        title: 'Card 5',
        price: 25,
        qty: 1
    }
];

const productsSlice = createSlice({
    name: 'products',
    initialState: { products:  PRODUCTS},
    reducers: {}
});

export const uiActions = productsSlice.actions;

export default productsSlice;
