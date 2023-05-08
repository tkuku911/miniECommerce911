import { FC } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../UI/Image/Image';
import productImage from '../../../../../assets/images/product.jpeg';
import AddToCart from '../../../../Layout/Cart/AddToCart/AddToCart';
import CardInfo from '../../../../Layout/Card/CardInfo/CardInfo';
import { Product } from '../../../../../interfaces/product';

interface ICardProps {
    item: Product;
}

const Card: FC<ICardProps> = ({item}) => {
    const link = `/product/${item.id}`;

    return(
        <div className={'border-2 rounded-lg border-purple-400 h-76 m-auto p-2'}>
            <Link to={link} className={'list'}>
                <Image src={productImage} alt={'Card image'} classes={'h-50'} />
                <div className={'flex justify-around'}>
                    <CardInfo item={item} displayDescription={false} />
                    <AddToCart
                        item={item}
                    />
                </div>
            </Link>
        </div>
    )
}

export default Card;
