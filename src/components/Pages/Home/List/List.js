import Card from './Card/Card';
import { useSelector } from 'react-redux';

const List = () => {
    const productItems = useSelector((state) => state.products.products);

    const products = (
        <ul className={'grid grid-rows-2 grid-flow-col gap-16'}>
            {productItems.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    qty={item.qty}
                    price={item.price}
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
