import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Productts from '../Product/Productts';

const ProductDetail = () => {
    const {productKey} = useParams();
    const prod = fakeData.find(pd => pd.key === productKey);
    console.log(prod);
    return (
        <div>
            <h1>{productKey} Product Detail coming soon</h1>
            <Productts showAddToCart={false} product={prod}></Productts>  {/*  products.map(pd=> <Productts handleAddProduct = {handleAddProducts} product={pd}></Productts>)  from shop page*/}
           
        </div>
    );
};

export default ProductDetail;