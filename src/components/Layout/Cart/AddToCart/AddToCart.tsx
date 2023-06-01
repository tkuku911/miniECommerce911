import { FC } from 'react';
import Button from '../../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/Cart/cart-slice';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';
import './AddToCart.scss';

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
            <Button type={'button'} onClick={addToCart} value={'Add'} classes="add-to-cart-btn" />
        </>
    )
}

export default AddToCart;
