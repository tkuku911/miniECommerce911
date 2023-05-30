import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductInterface } from '../../structures/interfaces/product.interface';

export const useProduct = (id: number) => {
    const siteUrl = 'https://shop.vilnomu-volya.in.ua';
    const apiKey = 'ck_fb640b78b9b68e83ba5fd316dd810be11bb7035d';
    const apiSecret = 'cs_8a8a4463d5dab2da0099c3fc3270b1e76a753804';

    const getProduct = useCallback(
        async (): Promise<ProductInterface> => {
            const { data } = await axios.get<ProductInterface>(
                `${siteUrl}/wp-json/wc/v3/products/${id}?consumer_key=${apiKey}&consumer_secret=${apiSecret}`,
            );
            return data;
        },
        [id]
    );

    return useQuery<any>(
        ['Product', id],
        async () => await getProduct(),
        {
            keepPreviousData: true,
        }
    );
};
