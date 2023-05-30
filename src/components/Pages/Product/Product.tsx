import { useParams } from 'react-router-dom';
import Image from '../../UI/Image/Image';
import AddToCart from '../../Layout/Cart/AddToCart/AddToCart';
import Banner from '../../Layout/Banner/Banner';
import CardInfo from '../../Layout/Card/CardInfo/CardInfo';
import TitleBlock from '../../Layout/TitleBlock/TitleBlock';
import { useProduct } from '../../../hooks/products/use-product';
import { Loader } from '../../Layout/Loader/Loader';
import { NotFoundImageObject } from '../../../structures/objects/not-found-image.object';


const Product = () => {
    let { id } = useParams();
    const { data, isFetching } = useProduct(Number(id));

    if (!data) return <Loader className="page-loader" />;

    const getImage = (
        <>{data?.images && data?.images.length
            ? (<Image src={data?.images[0].src} alt={data?.images[0].alt} classes={'h-96'} />)
            : <Image src={NotFoundImageObject.src} alt={NotFoundImageObject.alt} classes={'h-96'} />}</>
    );

    return(
        <>
            {isFetching && <Loader className="component-loader" />}
            <TitleBlock title={data?.name} />
            <div className={'mt-10 mb-10 flex px-64'}>
                {getImage}
                <div className={'ml-60'}>
                    <CardInfo item={data} displayTitle={false} displayDescription={true} />
                    <AddToCart item={data} />
                </div>
            </div>
            <Banner />
        </>
    )
}

export default Product;
