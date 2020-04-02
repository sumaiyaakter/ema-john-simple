import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import endImage from '../../images/giphy.gif';

const Review = () => {

    // 25.8
   const [cart, setCart] = useState ([]);
   const [orderPlaced, setOrderPlaced] = useState(false)

   const handlePlaceOrder = () =>{
    setCart([]);
    setOrderPlaced(true);
    processOrder();
   }

   const RemoveProduct = (productKey) => {
       const newCart = cart.filter(pd12 => pd12.key !== productKey)
       setCart(newCart);
       removeFromDatabaseCart(productKey);
   }

    useEffect(() =>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd2 => pd2.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
        console.log(cartProducts);
    }, [])

    let thankyou;
    if(orderPlaced){
        thankyou =  <img src={endImage} alt=""/>
    }

    return (
        <div className="container">
            <div>
                <h1>Cart Items: {cart.length}</h1>
                {
                    cart.map(productReviewItem =>  <ReviewItem 
                        productRemove = {RemoveProduct}
                        key = {productReviewItem.key}
                        productReview={productReviewItem}
                        ></ReviewItem>)
                }

                {thankyou}

            </div>

            <div className="cart-container">
                <Cart totalCart={cart}> {/* const cart2 = props.totalCart;  == cart.js*/}
                    <button onClick={handlePlaceOrder} className="btn">place order</button>
                </Cart>  
               
            </div>
        </div>


    );
};

export default Review;
