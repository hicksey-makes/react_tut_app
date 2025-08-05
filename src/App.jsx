import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './Product.jsx';
import Cart from './Cart.jsx';
import Landing from './Landing.jsx';
import Navbar from './Navbar';
import products from './data.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(products);

  function onAddProduct(product) {
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

  function onRemoveProduct(currentProduct) {
    if (currentProduct.quantity > 0) {
      const updatedCart = cart.map(product => {
        if (product.id === currentProduct.id) {
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }
        return product;
      })
      setCart(updatedCart);
    }
  }

  return (
    <>
    <div className="wrapper-gray">
        <div className="container">
          <Navbar cart={cart}  />
        </div>
    </div>

    <div className="container page-wrapper">
      <Landing  />
      <div className="products-grid">
        {products.map(product => {
          return <Product key={product.id} details={product}  />
        })}
      </div>
        {/* <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        */}
        <Cart onAddProduct={onAddProduct} onRemoveProduct={onRemoveProduct} cart={cart}  />

    </div>

    </>
  )
}

export default App
