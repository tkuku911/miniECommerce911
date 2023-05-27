import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import productImage from '../../../assets/images/phone.png';
import Image from '../../UI/Image/Image';
import AddToCart from '../../Layout/Cart/AddToCart/AddToCart';
import Banner from '../../Layout/Banner/Banner';
import CardInfo from '../../Layout/Card/CardInfo/CardInfo';
import { ProductInterface as IProduct } from '../../../structures/interfaces/product.interface';
import TitleBlock from '../../Layout/TitleBlock/TitleBlock';

const Product = () => {
    let { id } = useParams();
    const productItems = useSelector((state: any) => state.products.products);
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        const product: IProduct = productItems.find((item: IProduct) => item.id === id);
        setProduct(product);
    }, [id, productItems]);

    return(
        <>
            <TitleBlock title={product?.title} />
            <div className={'mt-10 mb-10 flex px-64'}>
                <Image src={productImage} alt={'Card image'} classes={'h-96'} />
                <div className={'ml-60'}>
                    <CardInfo item={product} displayTitle={false} displayDescription={true} />
                    <AddToCart item={product} />
                </div>
            </div>
            <Banner />
        </>
    )
}

export default Product;
