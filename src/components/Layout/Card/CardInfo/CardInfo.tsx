import { FC } from 'react';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';

interface ICardInfoProps {
    displayDescription: boolean;
    displayTitle: boolean;
    item: ProductInterface | null;
}

const CardInfo: FC<ICardInfoProps> = ({displayDescription, displayTitle, item}) => {

    const titleBlock = (
        <>{displayTitle ? (<p className="card-info-title">{item?.name}</p>) : ''}</>
    );

    const descriptionBlock = (
        <>{displayDescription ? (<p className="card-info-desc">{item?.description}</p>) : ''}</>
    );

    return(
        <div className="card-info">
            {titleBlock}
            <p className="card-info-price">{item?.price} $</p>
            {descriptionBlock}
        </div>
    )
}

export default CardInfo;
