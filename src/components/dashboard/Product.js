import React from 'react';

export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div>
        <img className="small" src={product.image} alt={product.name}></img>
        <h3> <a href={product.link}> {product.name} </a></h3>
        <div className='price block'>${product.price}</div>
        <div>
            <button onClick={() =>onAdd(product)} >Add To Cart</button>
        </div>
    </div>
  );
}




