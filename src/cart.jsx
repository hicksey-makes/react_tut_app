import {useState} from 'react';

function Cart(props) {
  const products = props.products;
  const [cart, setCart] = useState(products);
  console.log(products);
  function handleIncrement(product) {
    const updatedCart = cart.map(cartProduct => {
      if (cartProduct.id === product.id) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + 1
        };
      }
      return cartProduct;
    })
    setCart(updatedCart);
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

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
                  <li><button onClick={() => handleIncrement(product)}>+</button></li>
                  <li><button onClick>-</button></li>
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
