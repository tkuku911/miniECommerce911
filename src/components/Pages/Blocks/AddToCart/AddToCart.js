import { Fragment } from 'react';
import Button from '../../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { cartActions } from "../../../../store/Cart/cart-slice";

const AddToCart = (props) => {
    const dispatch = useDispatch();

    const addToCart = (event) => {
        event.preventDefault();
        const addToCart = {
            id: props.id,
            title: props.title,
            qty: 1,
            price: props.price
        }
        dispatch(cartActions.addItemToCart(addToCart));
    };

    return(
        <Fragment>
            <Button onClick={addToCart} value={'Add'} classes={'border-2 border-indigo-600 w-20 h-10 mt-1'}  />
        </Fragment>
    )
}

export default AddToCart;
