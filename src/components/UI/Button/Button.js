import { Fragment } from 'react';

const Button = (props) => {
    return(
        <Fragment>
            <button className={props.classes} onClick={props.onClick} disabled={props.disabled}>{props.value}</button>
        </Fragment>
    )
}

export default Button;
