import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart2 = props.totalCart;
    console.log(cart2);

    // const totalPrice = cart2.reduce((total, prd) => total + prd.price, 0);
    let totalPrice = 0;
    for (let i = 0; i< cart2.length; i++){
        const prd = cart2[i];
        totalPrice = totalPrice + prd.price;
    }  

    let shipping = 0;
    if(totalPrice > 100){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 10.99;
    }

    const tax = (totalPrice / 15).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div className="cart-details">
            <h1>cart summary</h1>
            <p>Cart Item: {cart2.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>      
            <p>shipping Cost: {shipping}</p>      
            <p>Tax + VAT: {tax}</p>      
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;