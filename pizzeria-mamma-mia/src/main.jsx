import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Importamos BrowserRouter
import CartProvider from './context/CartContext.jsx' // <-- Importamos el Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolvemos la App */}
    <CartProvider>
      <App />
    </CartProvider>  
    </BrowserRouter>
  </React.StrictMode>,
)