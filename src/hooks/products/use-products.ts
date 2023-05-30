import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductInterface } from '../../structures/interfaces/product.interface';

export const useProducts = () => {
    const siteUrl = 'https://shop.vilnomu-volya.in.ua';
    const apiKey = 'ck_fb640b78b9b68e83ba5fd316dd810be11bb7035d';
    const apiSecret = 'cs_8a8a4463d5dab2da0099c3fc3270b1e76a753804';

    const getProducts = useCallback(
        async (): Promise<ProductInterface[]> => {
            const { data } = await axios.get<ProductInterface[]>(
                `${siteUrl}/wp-json/wc/v3/products?consumer_key=${apiKey}&consumer_secret=${apiSecret}`,
            );
            return data;
        },
        []
    );

    return useQuery<any>(
        ['Products'],
        async () => await getProducts(),
        {
            keepPreviousData: true,
        }
    );
};


//TODO TO use https ->

/*
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
        url: "https://shop.vilnomu-volya.in.ua",
        consumerKey:  "ck_fb640b78b9b68e83ba5fd316dd810be11bb7035d",
        consumerSecret:  "cs_8a8a4463d5dab2da0099c3fc3270b1e76a753804",
        version: "wc/v3"
    });*/

/*const getProducts = useCallback(
    async (): Promise<any> => {
        api.get('products').then((response) => {
            console.log(response.data);
            return {
                ...response.data
            };
        })
            .catch((error) => {
                console.log(error.response.data);
            });
    }
    , []);*/
//TODO TO use https ->
