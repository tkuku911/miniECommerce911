import productImage from '../../../assets/images/product.jpeg';
import Image from '../../UI/Image/Image';
import AddToCart from '../Blocks/AddToCart/AddToCart';
import Banner from '../Blocks/Banner/Banner';
import { Fragment, useEffect, useState } from 'react';
import CardInfo from '../Blocks/CardInfo/CardInfo';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
    let { id } = useParams();
    const productItems = useSelector((state) => state.products.products);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const product = productItems.find(item => item.id === id);
        setProduct(product);
    }, [id]);

    return(
        <Fragment>
            <div className={'mt-10 mb-10 flex'}>
                <Image src={productImage} alt={'Card image'} classes={'h-50'} />
                <div className={'ml-60'}>
                    <CardInfo title={product.title} price={product.price}/>
                    <AddToCart id={id} title={product.title} price={product.price} />
                </div>
            </div>
            <Banner />
        </Fragment>
    )
}

export default Product;
