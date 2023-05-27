import Card from './Card/Card';
import { useSelector } from 'react-redux';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';

const List = () => {
    const productItems: ProductInterface[] = useSelector((state: any) => state.products.products);

    const products = (
        <ul className={'grid grid-rows-2 grid-flow-col gap-16 px-64'}>
            {productItems.map((item: ProductInterface) => (
                <Card
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    );

    return(
        <main className={'mt-8 mb-8'}>
            {products}
        </main>
    )
}

export default List;
