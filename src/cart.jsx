import {useState} from 'react';

function Cart(props) {
  const product = props.product;
  const [quantity, setQuantity] = useState(0);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="cart-wrapper">
    <h1>Your cart</h1>
    <div key={product.id} className="cart-product">
      <img src={product.image} alt={product.name} width="126" height="84"  />
      <div className="cart-product-details">
        <div className="cart-product-name">
          <p>{product.name}</p>
          <ul className="cart-buttons">
            <li>{quantity}</li>
            <li><button onClick={handleIncrement}>+</button></li>
            <li><button onClick={handleDecrement}>-</button></li>
          </ul>
        </div>
        <p>${(product.price/100).toFixed(2)}</p>
      </div>
      <p>${((product.price/100)*quantity).toFixed(2)}</p>
    </div>

    </div>
  );
}
export default Cart;
