import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import ApiFactory from "../mock";
import Modal from "./Modal";
import { AuthContext } from "../context/AuthContext";

const ProductEdit = ({ history }) => {
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const isAuth = useContext(AuthContext);
  const { id } = useParams();

  if (!isAuth) {
    history.push("/products");
  }

  function getProduct(id) {
    ApiFactory.getInstance()
      .get(`/api/products/${id}`)
      .then(({ data }) => {
        if (!data) {
          history.push("/products");
          throw new Error("Product not found");
        }
        setProduct(data);
      })
      .catch(error => {
        setMessage(error.response);
      });
  }

  function updateProduct(id, data) {
    ApiFactory.getInstance()
      .put(`/api/products/${id}`, data)
      .then(() => {
        history.push("/products");
        return;
      })
      .catch(error => {
        setMessage(error.response);
      });
  }

  const handleSubmit = (e, data) => {
    e.preventDefault();
    updateProduct(id, data);
  };

  const handleClose = () => {
    setMessage("");
  };
  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <div>
      <ProductForm onSubmit={handleSubmit} product={product} />
      {message && <Modal onClose={handleClose}>{message}</Modal>}
    </div>
  );
};

export default withRouter(ProductEdit);
