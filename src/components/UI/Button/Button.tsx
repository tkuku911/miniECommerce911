import { FC } from 'react';

export interface IButtonProps {
    type: 'button' | 'submit' | 'reset';
    classes: string;
    value: string;
    children?: never[];
    disabled?: boolean;
    onClick?: (event?: any) => void;
};

const Button: FC<IButtonProps> = ({type, classes, onClick, disabled, value}) => {
    return(
        <>
            <button type={type} className={classes} onClick={onClick} disabled={disabled}>{value}</button>
        </>
    )
}

export default Button;
