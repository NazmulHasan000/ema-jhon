import React from 'react';
import './Product.css'

const Product = (props) => {
    //  console.log(props);
    const{ img, name,price,seller,stock}=props.product;
    
    return (
        <div className='product'>
         <div>
            <img src={img} alt="" />
         </div>
          <div>
          <h4 className='product-name'>{name}</h4> <br />
            <p><small>by:{seller}</small></p>
            <p>${price} </p> <br />
            <p><small> Only {stock} available left</small></p>
            <button className='main-button' onClick={() => props.handleAddProduct(props.product)}>Add to Cart</button>
          </div>

        </div>
     
    );
};

export default Product;