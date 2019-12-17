import React, { useState, useContext } from "react";
import { CartItem } from "./CartItem";
import Modal from "./Modal";
import ApiFactory from "../mock";
import "./Cart.scss";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [message, setMessage] = useState("");

  const handlePurchase = () => {
    if (state.cartItems.length > 0) {
      buyItems(state.cartItems);
    }
    return;
  };
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleAdd = item => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handleRemove = id => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const handleClose = () => {
    setMessage("");
  };

  function buyItems(items) {
    ApiFactory.getInstance()
      .post("/api/buy", { itemsToBuy: items })
      .then(function() {
        setMessage("Thank you for your order!");
        dispatch({ type: "PURCHASE" });
      })
      .catch(error => {
        setMessage(error.response);
      });
  }

  return (
    <div className="content">
      {state.cartItems.length > 0 ? (
        <p className="info-message">Click buy to checkout!</p>
      ) : (
        <p className="info-message">Your cart is currently empty!</p>
      )}
      <div className="Cart">
        <div className="Cart__group">
          <div className="Cart__item">Name</div>
          <div className="Cart__item--wide no-mobile">Description</div>
          <div className="Cart__item">Count</div>
          <div className="Cart__item">Price</div>
          <div className="Cart__item">Actions</div>
        </div>
        {state.cartItems.map(item => {
          return (
            <CartItem
              handleAdd={() => handleAdd(item)}
              handleRemove={() => handleRemove(item.id)}
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
      {state.cartItems.length > 0 && (
        <div className="Cart__btn-group">
          <button className="Cart__btn" onClick={handlePurchase}>
            Buy
          </button>
          <button className="Cart__btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      )}
      {message && <Modal onClose={handleClose}>{message}</Modal>}
    </div>
  );
};

export default Cart;
