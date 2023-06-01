import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../UI/Modal/Modal';
import Cart from '../Cart/Cart';
import Button from '../../../UI/Button/Button';
import { uiActions } from '../../../../store/UI/ui-slice';
import { CartLocations } from '../../../../structures/enums/cart-locations.enum';
import './CartModal.scss';

interface ICartModalProps {
    onClose: () => void;
}

const CartModal: FC<ICartModalProps> = ({onClose}) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);
    const linkToOrder = '/checkout';

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return(
        <Modal onClose={onClose}>
            <div className="cart-modal">
                <Cart type={CartLocations.CartModal}/>
                <div className=''>
                    <Button
                        type={'button'}
                        classes={'border border-slate-400 rounded p-2 mr-2'}
                        onClick={toggleCartHandler}
                        value={'Close'}>
                    </Button>
                    <Link to={linkToOrder} onClick={toggleCartHandler}>
                        <Button
                            type={'button'}
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
