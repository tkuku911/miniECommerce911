import { FC } from 'react';
import './TitleBlock.scss';

interface ITitleBlockProps {
    title?: string;
}

const TitleBlock: FC<ITitleBlockProps> = ({title}) => {
    return(
        <div className="title-block">
            <h1>{title}</h1>
        </div>
    )
}

export default TitleBlock;
