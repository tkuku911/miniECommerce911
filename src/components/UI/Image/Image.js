import { Fragment } from 'react';

const Image = (props) => {
    return(
        <Fragment>
            <img src={props.src} alt={props.alt} className={props.classes} />
        </Fragment>
    )
}

export default Image;
