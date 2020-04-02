import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Productts = (props) => {
    // console.log(props.product);
    // console.log(props);
    
    const{img, name, seller, price, stock, key, quantity} = props.product;

    return (
        <div className="single-product">
            <div className="single-product__img">
                <img src={img} alt=""/>
            </div>

            <div className="single-product__content">
                <h3><Link to={"/product/"+key}>{name}</Link></h3>
                <p><small>by: {seller}</small></p>
                <p><small>${price}</small></p>
                <p>quantity: {quantity}</p>
                <p>only {stock} left in stock - order soon</p>

                {props.showAddToCart === true && <button
                    className="btn"
                    onClick={() => props.handleAddProduct(props.product)}>
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>

                }  
          </div>
        </div>
    );
};

export default Productts;