import { useParams } from 'react-router-dom';
import Image from '../../UI/Image/Image';
import AddToCart from '../../Layout/Cart/AddToCart/AddToCart';
import Banner from '../../Layout/Banner/Banner';
import CardInfo from '../../Layout/Card/CardInfo/CardInfo';
import TitleBlock from '../../Layout/TitleBlock/TitleBlock';
import { useProduct } from '../../../hooks/products/use-product';
import { Loader } from '../../Layout/Loader/Loader';
import { NotFoundImageObject } from '../../../structures/objects/not-found-image.object';
import './Product.scss';


const Product = () => {
    let { id } = useParams();
    const { data, isFetching } = useProduct(Number(id));

    if (!data) return <Loader className="page-loader" />;

    const getImage = (
        <>{data?.images && data?.images.length
            ? (<Image src={data?.images[0].src} alt={data?.images[0].alt} classes="product-image" />)
            : <Image src={NotFoundImageObject.src} alt={NotFoundImageObject.alt} classes="product-image" />}</>
    );

    return(
        <>
            {isFetching && <Loader className="component-loader" />}
            <TitleBlock title={data?.name} />
            <div className="product">
                {getImage}
                <div className="product-bottom">
                    <CardInfo item={data} displayTitle={false} displayDescription={true} />
                    <AddToCart item={data} />
                </div>
            </div>
            <Banner />
        </>
    )
}

export default Product;
