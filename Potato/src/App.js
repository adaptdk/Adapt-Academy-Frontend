import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Welcome from './pages/Welcome';
import Products from './pages/Products/Product';
import Purchase from './pages/Purchase';
import NewProduct from './pages/Products/New';
import EditProduct from './pages/Products/Edit';
import ApiFactory from './mock';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});

  useEffect(() => {
    ApiFactory.getInstance().get('/api/is-admin')
      .then(({ data }) => {
        setIsAdmin(data.isAdmin);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []); 

  return (
      <Router>
        <div className="notFooter">
        <Header />
        <Switch>
          <Route path="/" exact component={Welcome}/>
          <Route path="/Products" exact component={ () => <Products/> }/>
          <Route path="/Admin" component={ () => <Products isAdmin={ isAdmin } handleProductEdit={handleProductEdit} /> }/>
          <Route path="/Purchase" exact component={Purchase}/>
          <Route path="/Products/New" component={NewProduct}/>
          <Route path="/Products/Edit" component={() => <EditProduct product={productToEdit}/> }/>
        </Switch>
        </div>
        <Footer />
      </Router>
  )
  function handleProductEdit(product) { 
        setProductToEdit(product);
    }
}