import { FormParent } from './parent-form.interface';


export interface CheckoutFormValues extends FormParent {
    firstName: string;
    lastName: string;
    /*email: string;
    phone: string;
    address: string;*/
}
