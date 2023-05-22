import { FC, useCallback } from 'react';
import { useFormikContext } from 'formik';
import { FormParent } from '../../../interfaces/form/parent-form.interface';

export interface IButtonProps {
    type: string;
    classes: string;
    name: string;
    label: string;
    context: FormParent;
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
        <div className={'mb-5'}>
            <label>{label}</label>
            <input
                   type={type}
                   className={classes}
                   name={name}
                   value={typeof value === 'string' ? value : ''}
                   onChange={handleChange}
                   onBlur={handleBlur}
            />
            <div className="text-rose-500 text-sm">{showErrors ? error : ''}</div>
        </div>
    )
}

export default Input;
