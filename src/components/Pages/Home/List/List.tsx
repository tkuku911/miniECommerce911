import Card from './Card/Card';
import { useSelector } from 'react-redux';
import { Product } from '../../../../interfaces/product';

const List = () => {
    const productItems: Product[] = useSelector((state: any) => state.products.products);

    const products = (
        <ul className={'grid grid-rows-2 grid-flow-col gap-16 px-64'}>
            {productItems.map((item: Product) => (
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
