import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import ApiFactory from "../mock";
import ProductForm from "./ProductForm";
import { AuthContext } from "../context/AuthContext";

const ProductCreate = ({ history }) => {
  const isAuth = useContext(AuthContext);

  if (!isAuth) {
    history.push("/products");
  }
  const handleSubmit = (e, data) => {
    e.preventDefault();
    addProduct(data);
  };

  function addProduct(data) {
    ApiFactory.getInstance()
      .post(`/api/products`, data)
      .then(() => {
        history.push("/products");
        return;
      })
      .catch(error => {
        // TODO: Display nice error message.
        console.log(error.response);
      });
  }

  return (
    <div>
      <ProductForm
        onSubmit={handleSubmit}
        product={{ id: "", name: "", images: "" }}
      />
    </div>
  );
};

export default withRouter(ProductCreate);
