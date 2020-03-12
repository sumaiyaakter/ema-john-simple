import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Productts = (props) => {
    // console.log(props.product);
    // console.log(props);
    
    const{img, name, seller, price, stock} = props.product;

    return (
        <div className="single-product">
            <div className="single-product__img">
                <img src={img} alt=""/>
            </div>

            <div className="single-product__content">
                <h3><a href="//# ">{name}</a></h3>
                <p><small>by: {seller}</small></p>
                <p><small>${price}</small></p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddProduct(props.product)} className="cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Productts;