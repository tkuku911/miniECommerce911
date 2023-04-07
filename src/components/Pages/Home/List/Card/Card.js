import Image from '../../../../UI/Image/Image';
import productImage from '../../../../../assets/images/product.jpeg';
import AddToCart from '../../../Blocks/AddToCart/AddToCart';
import { Link } from 'react-router-dom';
import CardInfo from '../../../Blocks/CardInfo/CardInfo';

const Card = (props) => {
    const link = `/product/${props.id}`;

    return(
        <div className={'border-2 border-indigo-600 h-72 m-auto p-2'}>
            <Link to={link} className={'list'}>
                <Image src={productImage} alt={'Card image'} classes={'h-50'} />
                <div className={'flex justify-around'}>
                    <CardInfo title={props.title} price={props.price}/>
                    <AddToCart
                        id={props.id}
                        title={props.title}
                        qty={props.qty}
                        price={props.price}
                    />
                </div>
            </Link>
        </div>
    )
}

export default Card;
