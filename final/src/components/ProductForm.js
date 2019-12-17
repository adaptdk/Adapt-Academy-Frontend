import React, { useState, useEffect } from "react";

import "./ProductForm.scss";
import { Carousel } from "./Carousel";
import uuid from "uuid/v4";
import empty_image from "../assets/empty_image.png";

const ProductForm = ({ product, onSubmit }) => {
  const [productName, setProductName] = useState(" ");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    setProductName(product.name);
    setProductDescription(product.description);
    setProductPrice(product.price);
    setImages(product.images);
  }, [product]);

  const newImage = url => {
    return {
      id: uuid(),
      name: `image ${Math.random()}`,
      url
    };
  };

  const handleAddImage = e => {
    e.preventDefault();
    setImages([...images, newImage(productImageUrl)]);
  };
  const handleSubmit = e => {
    const updatedProduct = {
      id: product.id,
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      images: images.length < 1 ? [newImage(empty_image)] : images,
      new: product.new
    };
    onSubmit(e, updatedProduct);
  };
  return (
    <div className="content">
      <form className="ProductForm" onSubmit={handleSubmit}>
        <div className="ProductForm__group">
          <label className="ProductForm__label">Product name</label>
          <input
            className="ProductForm__input"
            value={productName || ""}
            onChange={e => setProductName(e.target.value)}
            type="text"
            name="name"
          />
        </div>
        <div className="ProductForm__group">
          <label className="ProductForm__label">Product description</label>
          <textarea
            className="ProductForm__input textarea"
            type="text"
            name="description"
            value={productDescription || ""}
            onChange={e => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="ProductForm__group">
          <label className="ProductForm__label">Product price</label>
          <input
            className="ProductForm__input"
            type="number"
            step="0.01"
            name="price"
            value={productPrice || ""}
            onChange={e => setProductPrice(e.target.value)}
          />
        </div>
        <div className="ProductForm__group">
          <label className="ProductForm__label">Product image</label>
          <div className="ProductForm__shared">
            <input
              className="ProductForm__input--shared"
              type="text"
              name="image"
              value={productImageUrl}
              onChange={e => setProductImageUrl(e.target.value)}
            />
            <input
              className="ProductForm__button--shared"
              type="button"
              value="Add image"
              onClick={handleAddImage}
            />
          </div>
        </div>
        <input className="ProductForm__button" type="submit" value="Submit" />
        <div className="ProductForm__image-container">
          {images && <Carousel data={images} />}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
