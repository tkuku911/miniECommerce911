import { FC } from 'react';
import { ProductInterface } from '../../../../interfaces/product.interface';

interface ICardInfoProps {
    displayDescription: boolean;
    displayTitle: boolean;
    item: ProductInterface | null;
}

const CardInfo: FC<ICardInfoProps> = ({displayDescription, displayTitle, item}) => {

    const titleBlock = (
        <>{displayTitle ? (<p className={'mb-3'}>{item?.title}</p>) : ''}</>
    );

    const descriptionBlock = (
        <>{displayDescription ? (<p className={'mb-3'}>{item?.description}</p>) : ''}</>
    );

    return(
        <div className={'flex flex-col'}>
            {titleBlock}
            <p className={'text-gray-600 mb-3 font-semibold'}>{item?.price} $</p>
            {descriptionBlock}
        </div>
    )
}

export default CardInfo;
