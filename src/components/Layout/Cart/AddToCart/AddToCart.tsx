import { FC } from 'react';
import Button from '../../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { cartActions } from "../../../../store/Cart/cart-slice";
import { Product } from '../../../../interfaces/product';

interface IAddToCartProps {
    item: Product | null;
}

const AddToCart: FC<IAddToCartProps> = ({item}) => {
    const dispatch = useDispatch();

    const addToCart = (event: any) => {
        event.preventDefault();
        const addToCart = {
            id: item?.id,
            title: item?.title,
            qty: 1,
            price: item?.price
        }
        dispatch(cartActions.addItemToCart(addToCart));
    };

    return(
        <>
            <Button onClick={addToCart} value={'Add'} classes={'border-2 rounded-lg border-purple-400 text-purple-400 w-20 h-10 mt-1'}  />
        </>
    )
}

export default AddToCart;
