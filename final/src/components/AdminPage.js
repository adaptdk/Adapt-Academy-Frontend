import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import ApiFactory from "../mock";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import "./AdminPage.scss";

function AdminPage({ values, history }) {
  const [message, setMessage] = useState("");

  function deleteProduct(id) {
    ApiFactory.getInstance()
      .delete(`/api/products/${id}`)
      .then(() => {
        history.push("/admin");
        return;
      })
      .catch(error => {
        setMessage(error.response);
      });
  }

  const handleClose = () => {
    setMessage("");
  };

  const onSubmit = id => {
    deleteProduct(id);
  };

  return (
    <div className="content">
      <div className="AdminPage">
        <div className="AdminPage__card">
          <h4 className="AdminPage__card-title">Create new product</h4>
          <p className="AdminPage__card-text">Click Add to proceed!</p>
          <Link className="AdminPage__card-link" to="/products/new">
            Add
          </Link>
        </div>
        {values.map(value => (
          <ProductCard
            id={value.id}
            key={value.id}
            name={value.name}
            price={value.price}
            description={value.description}
            images={value.images}
            edit
            onDelete={onSubmit}
          />
        ))}
      </div>
      {message && <Modal onClose={handleClose}>{message}</Modal>}
    </div>
  );
}

export default withRouter(AdminPage);
