import Card from './Card/Card';
import { ProductInterface } from '../../../../structures/interfaces/product.interface';
import { useProducts } from '../../../../hooks/products/use-products';
import { Loader } from '../../../Layout/Loader/Loader';
import './List.scss';

const List = () => {
    const { data, isFetching } = useProducts();
    if (!data) return <Loader className="page-loader" />;

    const products = (
        <ul>
            {data && typeof data !== 'undefined' ? data.map((item: ProductInterface) => (
                <Card
                    key={item.id}
                    item={item}
                />
            )) : null}
        </ul>
    );

    return(
        <main>
            {isFetching && <Loader className="component-loader" />}
            {products}
        </main>
    )
}

export default List;
