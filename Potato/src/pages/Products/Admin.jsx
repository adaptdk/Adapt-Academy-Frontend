import React from 'react';
import { withRouter } from 'react-router';

function Admin ({ history, products, handleProductDelete, handleProductEdit  }) {
    return (
          <div className="width">
            <div className="products__container">
              <div className="product">
                  <div className="product__content">
                      <div className="product__content__name">
                          Create new product
                      </div>
                      <div className="product__content__description">
                          product images to add
                      </div>
                  </div>
                      <div className="product__content">
                        <div className="product__content__name">Product name to add</div>
                        <div className="product__content__price">Product price to add</div>
                        <h3 className="product__content__description">Product description to add</h3>
                      </div>
                        <button className="product__button" onClick={ () => { history.push('/Products/New'); } } >Add</button>
                </div>
              {
                products.map((product, productIdx) => {
                  
                  return (
                    <div className="product" key={productIdx}>
                      <img className="product__img" src={product.images[0].url} />
                      <div className="product__content">
                        <div className="product__content__name">{product.name}</div>
                        <div className="product__content__price">{product.price} Eur.</div>
                        <h3 className="product__content__description">{product.description}</h3>
                      </div>
                      <div className="product__buttons">
                        <button className="product__button left" onClick={() => {handleProductEdit(product); history.push('/Products/Edit')}}>
                          Edit
                        </button>
                        <button className="product__button right" onClick={handleProductDelete(product.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        );
}

export default withRouter(Admin);