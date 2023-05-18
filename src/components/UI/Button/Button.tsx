import { FC } from 'react';

export interface IButtonProps {
    classes: string;
    value: string;
    children?: never[];
    disabled?: boolean;
    onClick?: (event?: any) => void;
};

const Button: FC<IButtonProps> = ({classes, onClick, disabled, value}) => {
    return(
        <>
            <button className={classes} onClick={onClick} disabled={disabled}>{value}</button>
        </>
    )
}

export default Button;
