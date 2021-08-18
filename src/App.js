import logo from './logo.svg';
import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import './App.css';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import { NavLink } from 'react-router-dom';

function App() {
  const history = useHistory()
  return (
    <div className="App">
      <div className="routes">
        <div>
          <NavLink className="route" activeClassName="activeRoute" to="/products">Products</NavLink>
        </div>
        <div>
          <NavLink className="route" activeClassName="activeRoute" to="/cart">Cart</NavLink>
        </div>
      </div>
      <div >
        <Switch>
          <Route path='/cart' exact>
            <Cart />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId' exact>
            <Product />
          </Route>

          <Route to='*'>
            <Redirect to="/products" />
          </Route>
        </Switch>
      </div>
    </div>

  );
}

export default App;
