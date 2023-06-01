import { FC } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../UI/Image/Image';
import productImage from '../../../../../assets/images/product.jpeg';
import AddToCart from '../../../../Layout/Cart/AddToCart/AddToCart';
import CardInfo from '../../../../Layout/Card/CardInfo/CardInfo';
import { ProductInterface } from '../../../../../structures/interfaces/product.interface';
import './Card.scss';

interface ICardProps {
    item: ProductInterface;
}

const Card: FC<ICardProps> = ({item}) => {
    const link = `/product/${item.id}`;

    return(
        <div className="card">
            <Link to={link} className="card-link">
                <Image src={productImage} alt={'Card image'} classes="card-image" />
                <div className="card-bottom">
                    <CardInfo item={item} displayTitle={true} displayDescription={false} />
                    <AddToCart
                        item={item}
                    />
                </div>
            </Link>
        </div>
    )
}

export default Card;
