import { FC, useCallback } from 'react';
import { useFormikContext } from 'formik';
import { FormParentInterface } from '../../../structures/interfaces/form/parent-form.interface';
import './Input.scss';

export interface IButtonProps {
    type: string;
    classes: string;
    name: string;
    label: string;
    context: FormParentInterface;
};

const Input: FC<IButtonProps> = ({type, classes, name, label, context}) => {
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
        <div className="input-container">
            <label>{label}</label>
            <input
                   type={type}
                   className={classes}
                   name={name}
                   value={typeof value === 'string' ? value : ''}
                   onChange={handleChange}
                   onBlur={handleBlur}
            />
            <div className="error-message">{showErrors ? error : ''}</div>
        </div>
    )
}

export default Input;
