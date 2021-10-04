import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import Pagination from './components/Pagination';
import FiltersComponent from './components/FiltersComponent';
import Products from './components/Products';


function App() {

  return (

    <Router>
      <Switch>

        <Route path="/" exact>
          <div className="main-wrapper">
            <FiltersComponent />
            <Products />
            <Pagination />
          </div>
        </Route>

        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
      </Switch>

    </Router>


  );
}

export default App;
