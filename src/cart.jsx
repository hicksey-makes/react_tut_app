import {useState} from 'react';

function Cart(props) {


  console.log(props);
  const {cart, onAddProduct, onRemoveProduct} = props;


  return (
    <div className="cart-wrapper">
    <h1>Your cart</h1>
      {cart.map(product => <div key={product.id} className="cart-product">
            <img src={product.image} alt={product.name} width="126" height="84"  />
            <div className="cart-product-details">
              <div className="cart-product-name">
                <p>{product.name}</p>
                <ul className="cart-buttons">
                  <li>{product.quantity}</li>
                  <li><button onClick={() => onAddProduct(product)}>+</button></li>
                  <li><button onClick={() => onRemoveProduct(product)}>-</button></li>
                </ul>
              </div>
              <p>${(product.price/100).toFixed(2)}</p>
            </div>
            <p>${((product.price/100)*product.quantity).toFixed(2)}</p>
          </div>

      )}
    </div>
  );
}
export default Cart;
