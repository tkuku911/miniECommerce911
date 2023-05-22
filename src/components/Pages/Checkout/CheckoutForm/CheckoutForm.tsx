import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Input from '../../../UI/Input/Input';
import CheckoutSubmit from './CheckoutSubmit/CheckoutSubmit';
import { CheckoutFormValues } from '../../../../interfaces/form/checkout-form.interface';


const CheckoutForm = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const checkoutFormInitialValues: CheckoutFormValues = {
        firstName: '',
        lastName: '',
       /* email: '',
        phone: '',
        address: '',*/
    };

    const checkoutFormSchema = Yup.object().shape({
        firstName: Yup.string().required('The field shouldn\'t be empty').trim('Invalid'),
        lastName: Yup.string().required('The field shouldn\'t be empty').trim('Invalid'),
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
                    <CheckoutSubmit type={'submit'} classes={'border-2 bg-purple-500 text-white p-3 mt-5'} value={'Submit'} />
                </Form>
            </Formik>
        </div>
    )
}

export default CheckoutForm;
