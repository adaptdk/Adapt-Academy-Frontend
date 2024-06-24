import React from "react";

import ProductCard from "./ProductCard";
import "./ProductList.scss";

const ProductList = ({ values }) => {
  const renderEmpty = () => {
    if (values.length < 1) {
      return <h3>Shop is currently empty!</h3>;
    }
  };

  return (
    <div className="content">
      <div className="ProductList">
        {renderEmpty()}
        {values.map(({ id, name, price, description, images }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
            images={images}
            edit={false}
            onDelete
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
