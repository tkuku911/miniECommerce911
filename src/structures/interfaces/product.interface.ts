export interface ProductInterface {
    id: string;
    name: string;
    description: string;
    price: number;
    qty: number;
    totalItemPrice?: number;
    images?: Image[];
}

export interface Image {
    src: string;
    alt: string;
    name: string;
}
