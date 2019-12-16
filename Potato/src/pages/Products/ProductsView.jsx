import React from 'react';

function ProductsView ({ products, handleProductAdd }) {


    return (
              <div className="width">
              <div className="products__container">
              {
                products.map(( product, productIdx) => {
                  return (
                    <div className="product" key={productIdx}>
                      <img className="product__img" src={product.images[0].url} />
                      <div className="product__content">
                        <div className="product__content__name">{product.name}</div>
                        <div className="product__content__price">{product.price} Eur.</div>
                        <h3 className="product__content__description">{product.description}</h3>
                      </div>
                      <button className="product__button" onClick={handleProductAdd(product)}>
                        Add to cart
                      </button>
                    </div>
                  );
                })
              }
              </div>
              </div>
        );
}

export default ProductsView;