import React from 'react';
import {Link} from 'react-router-dom';


export default function Product({ product, onAdd }) {
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>
        {product.link ? (
          <Link to={product.link}>{product.name}</Link>
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
