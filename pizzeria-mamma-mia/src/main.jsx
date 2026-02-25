import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Importamos BrowserRouter
import CartProvider from './context/CartContext.jsx' // <-- Importamos el Provider
import UserProvider from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolvemos la App */}
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>  
    </BrowserRouter>
  </React.StrictMode>,
)