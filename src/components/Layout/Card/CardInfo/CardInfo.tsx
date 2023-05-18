import { FC } from 'react';
import { Product } from '../../../../interfaces/product';

interface ICardInfoProps {
    displayDescription: boolean;
    item: Product | null;
}

const CardInfo: FC<ICardInfoProps> = ({displayDescription, item}) => {

    const descriptionBlock = (
        <>
            {displayDescription ? (<p className={'mb-3'}>{item?.description}</p>) : ''}
        </>
    );

    return(
        <div className={'flex flex-col'}>
            <h1 className={'text-xl'}>{item?.title}</h1>
            <p className={'text-gray-600 mb-3'}>{item?.price} $</p>
            { descriptionBlock }
        </div>
    )
}

export default CardInfo;
