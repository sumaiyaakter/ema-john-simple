import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Productts from '../Product/Productts';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    
    const first5 = fakeData.slice(0,5);
    const [products, setProducts] = useState(first5);
    const [cart,setCart] = useState([]);
    // console.log(fakeData);

    useEffect(()=>{
        const saveCart= getDatabaseCart();
        const producctkeys = Object.keys(saveCart);
        const previousCart = producctkeys.map(existingkey => {
            const product36 = fakeData.find(product37 => product37.key === existingkey);
            product36.quantity = saveCart[existingkey]
            return product36;
        })
        setCart(previousCart);
    }, [])

    const handleAddProducts =(addProduct) =>{
        const productToBeAdded = addProduct.key;
        const sameProduct = cart.find(product22 => product22.key === productToBeAdded);
        let count = 1;
        let newCart;

        if(sameProduct){
            count = sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others = cart.filter(product33 => product33.key !== productToBeAdded);
            newCart = [...others, sameProduct];
        }else{
            addProduct.quantity = 1;
            newCart = [...cart, addProduct];
        }
        setCart (newCart);
        addToDatabaseCart(addProduct.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                 products.map(pd=> <Productts 
                    key = {pd.key}
                    showAddToCart={true} 
                    handleAddProduct = {handleAddProducts} 
                    product={pd}
                    ></Productts>)

                }
            </div>

            <div className="cart-container">
                <Cart totalCart = {cart}>
                    <Link to="/review"><button className="btn">review</button></Link>    
                </Cart>  {/* const cart2 = props.totalCart;  == cart.js*/}
            </div>
        </div>
    );
};

export default Shop;
