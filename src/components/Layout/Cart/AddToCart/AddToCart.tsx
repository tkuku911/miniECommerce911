import { FC } from 'react';
import Button from '../../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/Cart/cart-slice';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';

interface IAddToCartProps {
    item: ProductInterface | null;
}

const AddToCart: FC<IAddToCartProps> = ({item}) => {
    const dispatch = useDispatch();

    const addToCart = (event: any) => {
        event.preventDefault();
        const addToCart = {
            id: item?.id,
            title: item?.name,
            qty: 1,
            price: Number(item?.price)
        }
        dispatch(cartActions.addItemToCart(addToCart));
    };

    return(
        <>
            <Button type={'button'} onClick={addToCart} value={'Add'} classes={'border-2 rounded-lg border-purple-400 text-purple-400 w-20 h-10 mt-1'}  />
        </>
    )
}

export default AddToCart;
