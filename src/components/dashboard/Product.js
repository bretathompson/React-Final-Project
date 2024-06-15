import React from 'react';

export default function Product({ product, onAdd }) {
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>
        {product.link ? (
          <a href={product.link}>{product.name}</a>
        ) : (
          <span>{product.name}</span>
        )}
      </h3>
      {/* <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div> */}
    </div>
  );
}
