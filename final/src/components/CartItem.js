import React from "react";

import "./CartItem.scss";

const CartItem = ({ data, handleAdd, handleRemove }) => {
  return (
    <div className="CartItem">
      <p className="CartItem__item">{data.name}</p>
      <p className="CartItem__item no-mobile">
        {data.description.replace(/^(.{190}[^\s]*).*/, "$1")}...
      </p>
      <p className="CartItem__item">{data.quantity}</p>
      <p className="CartItem__item">{data.price}</p>
      <div className="CartItem__btn-group">
        <button onClick={handleAdd} className="CartItem__btn green">
          +
        </button>
        <button onClick={handleRemove} className="CartItem__btn red">
          -
        </button>
      </div>
    </div>
  );
};

export { CartItem };
