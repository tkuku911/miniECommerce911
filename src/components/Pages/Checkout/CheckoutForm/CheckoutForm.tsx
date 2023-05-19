import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

const CheckoutForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    interface CheckoutFormValues {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
    }

    const checkoutFormInitialValues: CheckoutFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    };

    const checkoutFormSchema = Yup.object().shape({
        firstName: Yup.string().required('Requires yup').trim('Invalid'),
    });

    return(
        <div className={'mb-10'}>
            <h3 className={'text-left font-bold text-2xl mb-6'}>Checkout Form</h3>
            <Formik
                initialValues={checkoutFormInitialValues}
                onSubmit={onSubmit}
                validationSchema={checkoutFormSchema}
            >
                <Form className={'flex flex-col gap-5'}>
                    <input type='text' className={'border-2 h-10'} autoComplete="off" name='firstName' />
                </Form>
            </Formik>
        </div>
    )
}

export default CheckoutForm;
