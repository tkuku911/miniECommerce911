import { FC, Fragment } from 'react';

export interface IImageProps {
    classes: string;
    src: string;
    alt: string;
};

const Image: FC<IImageProps> = ({classes, src, alt}) => {
    return(
        <Fragment>
            <img src={src} alt={alt} className={classes} />
        </Fragment>
    )
}

export default Image;
