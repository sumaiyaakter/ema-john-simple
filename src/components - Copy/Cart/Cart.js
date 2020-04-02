import React, { useContext } from 'react';
import './Cart.css';
import { UserContext } from '../../App';

const Cart = (props) => {
    const cart2 = props.totalCart;

    const user = useContext(UserContext);
    console.log(user);
    // console.log(cart2);
    // const totalPrice = cart2.reduce((total, product11) => total + product11.price, 0); 
    // OR
    let totalPrice = 0;
    for (let i = 0; i< cart2.length; i++){
        const product11 = cart2[i];
        totalPrice = totalPrice + product11.price * product11.quantity;
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
            {
                props.children
            }
        </div>
    );
};

export default Cart;