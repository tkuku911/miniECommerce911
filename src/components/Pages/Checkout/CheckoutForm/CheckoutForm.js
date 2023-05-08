import { Fragment } from 'react';
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return(
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-5'}>
                <input {...register("name", { required: true })} className={'border-2 h-10'} />
                {errors.name && <span className={'-mt-4 text-rose-600'}>This field is required name</span>}

                <input {...register("lastname", { required: true })} className={'border-2 h-10'} />
                {errors.lastname && <span className={'-mt-4 text-rose-600'}>This field is required</span>}

                <input {...register("email", { required: true })} className={'border-2 h-10'} />
                {errors.email && <span className={'-mt-4 text-rose-600'}>This field is required</span>}

                <input {...register("phone", { required: true })} className={'border-2 h-10'} />
                {errors.phone && <span className={'-mt-4 text-rose-600'}>This field is required</span>}

                <input {...register("address", { required: true })} className={'border-2 h-10'} />
                {errors.address && <span className={'-mt-4 text-rose-600'}>This field is required</span>}

                <input type="submit" className={'border-2 bg-slate-500 py-3 w-72'} />
            </form>
        </Fragment>
    )
}

export default CheckoutForm;
