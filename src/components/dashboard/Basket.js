import React from 'react';

export default function Basket({ cartItems, onAdd, onRemove, onRemoveAll }) {
  console.log('Current cart items:', cartItems);
  const itemsPrice = cartItems.reduce((total, item) => {
    if (typeof item.qty !== 'number' || typeof item.price !== 'number') {
      console.warn(`Invalid item found in cartItems: ${JSON.stringify(item)}`);
      return total; 
    }
    return total + item.qty * item.price;
  }, 0);

  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice <= 2000 ? 10 : 0;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  console.log('itemsPrice:', itemsPrice);
  console.log('taxPrice:', taxPrice);
  console.log('shippingPrice:', shippingPrice);
  console.log('totalPrice:', totalPrice);

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.cartId} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item.cartId)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
              <button onClick={onRemoveAll} className="remove-all">
                Remove All
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}





