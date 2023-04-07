import Modal from '../../../UI/Modal/Modal';
import Cart from '../Cart/Cart';
import Button from '../../../UI/Button/Button';
import { Link } from 'react-router-dom';
import { uiActions } from '../../../../store/UI/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartModal = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const linkToOrder = '/checkout';

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return(
        <Modal onClose={props.onClose}>
            <div className={'flex flex-col h-full'}>
                <Cart />
                <div className=''>
                    <Button
                        classes={'border border-slate-400 rounded p-2 mr-2'}
                        onClick={toggleCartHandler}
                        value={'Close'}>
                    </Button>
                    <Link to={linkToOrder} onClick={toggleCartHandler}>
                        <Button
                            classes={'border border-slate-400 rounded p-2' + (!cartQuantity ? ' disabled:opacity-25' : '')}
                            value={'Order'}
                            disabled={!cartQuantity}>
                        </Button>
                    </Link>
                </div>
            </div>
        </Modal>
    )
}

export default CartModal;
