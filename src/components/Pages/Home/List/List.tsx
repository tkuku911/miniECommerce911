import Card from './Card/Card';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';
import { useProducts } from '../../../../hooks/products/use-products';
import { Loader } from '../../../Layout/Loader/Loader';

const List = () => {
    const { data, isFetching } = useProducts();

    if (!data) return <Loader className="page-loader" />;
    console.log(data, 'Products');

    const products = (
        <ul className={'grid grid-rows-2 grid-flow-col gap-16 px-64'}>
            {data && typeof data !== 'undefined' ? data.map((item: ProductInterface) => (
                <Card
                    key={item.id}
                    item={item}
                />
            )) : null}
        </ul>
    );

    return(
        <main className={'mt-8 mb-8'}>
            {isFetching && <Loader className="component-loader" />}
            {products}
        </main>
    )
}

export default List;
