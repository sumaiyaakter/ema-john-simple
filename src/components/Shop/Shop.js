import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Productts from '../Product/Productts';
import Cart from '../Cart/Cart';

const Shop = () => {
    
    const first5 = fakeData.slice(0,5);
    const [products, setProducts] = useState(first5);
    const [cart,setCart] = useState([]);
    // console.log(fakeData);

    const handleAddProducts =(addProductuct) =>{
        const newCart = [...cart, addProductuct];
        setCart (newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                 products.map(pd=> <Productts handleAddProduct = {handleAddProducts} product={pd}></Productts>)

                }
            </div>

            <div className="cart-container">
                <Cart totalCart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
