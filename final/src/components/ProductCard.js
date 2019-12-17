import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./ProductCard.scss";
import { Carousel } from "./Carousel";
import { StoreContext } from "../context/StoreContext";
import Modal from "./Modal";

const ProductCard = ({
  id,
  name,
  price,
  description,
  images,
  edit,
  history,
  onDelete
}) => {
  const [state, dispatch] = useContext(StoreContext);
  const [message, setMessage] = useState("");
  const item = { id, name, price, description, quantity: 1 };
  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    setMessage(`${name} has been added to your cart!`);
  };

  const handleClose = () => {
    setMessage("");
  };

  const renderButtons = () => {
    if (!edit) {
      return (
        <button onClick={handleAdd} className="btn ProductCard__body-btn">
          Add to cart
        </button>
      );
    } else {
      return (
        <div className="ProductCard__group">
          <button
            onClick={() => history.push(`/products/edit/${id}`)}
            className="btn ProductCard__group-btn green"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn ProductCard__group-btn red"
          >
            Delete
          </button>
        </div>
      );
    }
  };
  return (
    <div className="ProductCard">
      <div className="ProductCard__image-container">
        <Carousel data={images} />
      </div>
      <div className="ProductCard__body">
        <h5 className="ProductCard__body-title">{name}</h5>
        <p className="ProductCard__body-price">{price} Eur.</p>
        <p className="ProductCard__body-description">{description}</p>
        {renderButtons()}
      </div>
      {message && <Modal onClose={handleClose}>{message}</Modal>}
    </div>
  );
};

export default withRouter(ProductCard);
