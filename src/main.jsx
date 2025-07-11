import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import products from './data.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App products={products}  />
  </StrictMode>,
)
