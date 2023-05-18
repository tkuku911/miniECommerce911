import { FC } from 'react';

export interface IImageProps {
    classes: string;
    src: string;
    alt: string;
};

const Image: FC<IImageProps> = ({classes, src, alt}) => {
    return(
        <>
            <img src={src} alt={alt} className={classes} />
        </>
    )
}

export default Image;
