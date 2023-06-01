import { FC, useCallback } from 'react';
import { IMaskInput } from 'react-imask';
import { useFormikContext } from 'formik';
import { FormParentInterface } from '../../../structures/interfaces/form/parent-form.interface';
import './MaskedInput.scss';

export interface IButtonProps {
    type: string;
    mask: string;
    classes: string;
    name: string;
    label: string;
    context: FormParentInterface;
};

const MaskedInput: FC<IButtonProps> = ({type, mask, classes, name, label, context}) => {
    const { getFieldMeta, setFieldValue, setFieldTouched, handleBlur } = useFormikContext<typeof context>() ?? {};
    const { error, touched, value } = getFieldMeta(name);
    const showErrors = error && touched;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFieldValue(name, e.target.value);
            if (!touched) setFieldTouched(name, true);
        },
        [name, setFieldTouched, setFieldValue, touched]
    );

    return(
        <div className="masked-input-container">
            <label>{label}</label>
            <IMaskInput
                type={type}
                mask={mask}
                className={classes}
                name={name}
                value={typeof value === 'string' ? value : ''}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div className="masked-input-container-error-message">{showErrors ? error : ''}</div>
        </div>
    )
}

export default MaskedInput;
