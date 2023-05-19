import { FC } from 'react';

interface ITitleBlockProps {
    title?: string;
}

const TitleBlock: FC<ITitleBlockProps> = ({title}) => {
    return(
        <div className={'bg-purple-900 p-24 mb-10'}>
            <h1 className={'text-center text-5xl font-black text-white'}>{title}</h1>
        </div>
    )
}

export default TitleBlock;
