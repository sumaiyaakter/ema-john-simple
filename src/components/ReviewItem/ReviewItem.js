import React from 'react';

const ReviewItem = (props) => {
    const{name, quantity, key, price} = props.productReview

    const reviewStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '20px',
        paddingBottom: '20px',
    }
    return (
        <div className="review-item" style={reviewStyle}>
            <h4>{name}</h4>
            <p>quantity: {quantity}</p>
            <p>{price}</p>
            <button onClick= {() => props.productRemove(key)} className="btn">Remove</button>
        </div>
    );
};

export default ReviewItem;