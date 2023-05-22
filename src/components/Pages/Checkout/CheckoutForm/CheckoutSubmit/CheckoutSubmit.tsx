import { FC } from 'react';
import Button from '../../../../UI/Button/Button';
import { useFormikContext } from 'formik';
import { CheckoutFormValues } from '../../../../../interfaces/form/checkout-form.interface';

export interface IButtonProps {
    type: 'button' | 'submit' | 'reset';
    classes: string;
    value: string;
    onClick?: (event?: any) => void;
};

const CheckoutSubmit: FC<IButtonProps> = ({type, classes, onClick, value}) => {
    const { isValid, dirty } = useFormikContext<CheckoutFormValues>();
    const disabled = !isValid || !dirty;

    return(
        <>
            <Button type={type} classes={`${classes} ${disabled ? ' disabled:opacity-25' : ''}`} value={value} disabled={disabled} />
        </>
    )
}

export default CheckoutSubmit;
