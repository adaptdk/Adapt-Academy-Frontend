import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiFactory from "./mock";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductEdit from "./components/ProductEdit";
import AdminPage from "./components/AdminPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

export default function App() {
  const [value, setValue] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleClose = () => {
    setMessage("");
  };

  return (
    <div className="main-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/admin" exact>
            <AdminPage values={value} />
          </Route>
          <Route path="/products/new" exact component={ProductCreate} />
          <Route path="/products/edit/:id" exact>
            <ProductEdit />
          </Route>
          <Route path="/products">
            <ProductList values={value} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {message && <Modal onClose={handleClose}>{message}</Modal>}
    </div>
  );

  function getAllProducts() {
    ApiFactory.getInstance()
      .get("/api/products")
      .then(({ data }) => {
        setValue(data);
      })
      .catch(error => {
        setMessage(error.response);
      });
  }
}
