// import React, { useState } from 'react';
// import fakeData from '../../fakeData';
// import './Shop.css';
// import Productts from '../Product/Productts';

// const Shop = () => {
    
//     const first5 = fakeData.slice(0,5);
//     const [products, setProducts] = useState(first5);
//     // console.log(fakeData);

//     const handleAddProducts =(addProductuct) =>{
//         console.log('added', addProductuct);
//     }

//     return (
//         <div className="shop-container">
//             <div className="product-container">
//                 {
//                     // products.map(pd => <h3>{pd.name}</h3>)
//                     // products.map(pd => <Productts></Productts>)
//                     // products.map(pd=> <Productts product={pd}></Productts>)

//                     products.map(pd=> <Productts handleAddProduct = {handleAddProducts} product={pd}></Productts>)

//                 }
//             </div>

//             <div className="cart-container">
//                 <h3>order summary</h3>
//             </div>
//         </div>
//     );
// };

// export default Shop;



// =========================== 23.12  ==================================== //
    // Cart state setup and update cart state on add to cart button click
// ======================================================================= //

// import React, { useState } from 'react';
// import fakeData from '../../fakeData';
// import './Shop.css';
// import Productts from '../Product/Productts';

// const Shop = () => {
    
//     const first5 = fakeData.slice(0,5);
//     const [products, setProducts] = useState(first5);
//     const [cart,setCart] = useState([]);
//     // console.log(fakeData);

//     const handleAddProducts =(addProductuct) =>{
//         console.log('added', addProductuct);
//         const newCart = [...cart, addProductuct];
//         setCart (newCart);
//     }

//     return (
//         <div className="shop-container">
//             <div className="product-container">
//                 {
//                  products.map(pd=> <Productts handleAddProduct = {handleAddProducts} product={pd}></Productts>)

//                 }
//             </div>

//             <div className="cart-container">
//             <h3>order summary {cart.length}</h3>
//             </div>
//         </div>
//     );
// };

// export default Shop;



// =========================== 23.13  ==================================== //
    // Cart state setup and update cart state on add to cart button click
// ======================================================================= //



// =========================== 23.14  ==================================== //
    // Cart state setup and update cart state on add to cart button click
// ======================================================================= //
