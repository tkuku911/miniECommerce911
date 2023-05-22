import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Input from '../../../UI/Input/Input';
import CheckoutSubmit from './CheckoutSubmit/CheckoutSubmit';
import { CheckoutFormValuesInterface } from '../../../../interfaces/form/checkout-form.interface';
import MaskedInput from '../../../UI/MaskedInput/MaskedInput';


const CheckoutForm = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const checkoutFormInitialValues: CheckoutFormValuesInterface = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    };

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const checkoutFormSchema = Yup.object().shape({
        firstName: Yup.string().required('The field shouldn\'t be empty').trim('Invalid'),
        lastName: Yup.string().required('The field shouldn\'t be empty').trim('Invalid'),
        email: Yup.string()
            .trim('Invalid')
            .matches(EMAIL_REGEX, 'Email is incorrect')
            .required('The field shouldn\'t be empty'),
        phone:  Yup.string().required('The field shouldn\'t be empty').trim('Invalid'),
        address:  Yup.string().required('The field shouldn\'t be empty').trim('Invalid'),
    });

    return(
        <div className={'mb-10'}>
            <h3 className={'text-left font-bold text-2xl mb-6'}>Checkout Form</h3>
            <Formik
                initialValues={checkoutFormInitialValues}
                onSubmit={onSubmit}
                validationSchema={checkoutFormSchema}
            >
                <Form className={'flex flex-col'}>
                    <Input type={'text'} classes={'border-2 border-slate-300 rounded-lg w-full h-10'} name={'firstName'} label={'Firstname'} context={'CheckoutFormValues'} />
                    <Input type={'text'} classes={'border-2 border-slate-300 rounded-lg w-full h-10'} name={'lastName'} label={'Lastname'} context={'CheckoutFormValues'} />
                    <Input type={'email'} classes={'border-2 border-slate-300 rounded-lg w-full h-10'} name={'email'} label={'Email'} context={'CheckoutFormValues'} />
                    <MaskedInput type={'text'} mask="(000)-000-0000" classes={'border-2 border-slate-300 rounded-lg w-full h-10'} name={'phone'} label={'Phone'} context={'CheckoutFormValues'} />
                    <Input type={'text'} classes={'border-2 border-slate-300 rounded-lg w-full h-10'} name={'address'} label={'Address'} context={'CheckoutFormValues'} />
                    <CheckoutSubmit type={'submit'} classes={'border-2 rounded-lg bg-purple-500 text-white p-3 mt-5'} value={'Submit'} />
                </Form>
            </Formik>
        </div>
    )
}

export default CheckoutForm;
