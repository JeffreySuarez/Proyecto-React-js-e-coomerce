import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './home'
import {CartProvider} from './componets/carContext/carContext'





ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Home />
    </CartProvider>    

  </React.StrictMode>,
  document.getElementById('root')
);


