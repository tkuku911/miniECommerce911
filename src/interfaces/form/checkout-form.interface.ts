import { FormParentInterface } from './parent-form.interface';


export interface CheckoutFormValuesInterface extends FormParentInterface {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
}
