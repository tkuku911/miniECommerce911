import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';

const PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'Iphone 3g',
        price: 120,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    {
        id: '2',
        title: 'Iphone 4s',
        price: 220,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    {
        id: '3',
        title: 'Iphone 6 Plus',
        price: 400,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    {
        id: '4',
        title: 'Iphone 10',
        price: 650,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    {
        id: '5',
        title: 'Iphone 11',
        price: 700,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    {
        id: '6',
        title: 'Iphone 12',
        price: 760,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    {
        id: '7',
        title: 'Iphone 12 Pro',
        price: 900,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    {
        id: '8',
        title: 'Iphone 13',
        price: 920,
        description: 'Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. ' +
            'Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. ' +
            'Praise turned it lovers be warmly by. Little do it eldest former be if. ',
        qty: 1
    },
    /*{
        id: '9',
        title: 'Iphone 14',
        price: 1200,
        qty: 1
    },
    {
        id: '10',
        title: 'Iphone 14 Pro',
        price: 1250,
        qty: 1
    },
    {
        id: '11',
        title: 'Iphone 14 Pro Max',
        price: 1350,
        qty: 1
    }*/
];

const productsSlice = createSlice({
    name: 'products',
    initialState: { products:  PRODUCTS},
    reducers: {}
});

export const uiActions = productsSlice.actions;

export default productsSlice;
