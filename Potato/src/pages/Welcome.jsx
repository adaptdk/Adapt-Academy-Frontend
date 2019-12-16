import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ApiFactory from '../mock';

function Welcome ({ history }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiFactory.getInstance().get('/api/products')
    .then(({ data }) => {
    setProducts(data);
    })
    .catch((error) => {
        console.log('Could not fetch products from the API.');
    })
  }, []);
    return (
        <div className="WelcomePage">
            <div className="WelcomePage__intro intro">
              <div className="intro__content">
                <h1>
                  Discover a new world of potates
                </h1>
                <p>
                  Potato, Solanum tuberosum, is an herbaceous perennial plant in the family Solanaceae which is grown for its edible tubers. The potato plant has a branched stem and alternately arranged leaves consisting of leaflets which are both of unequal size and shape.
                </p>
                <a className="link" onClick={ () => { history.push('/Products'); } }>Start shopping</a>
                <p>
                  Look below to see what kind of potates exist and possible to buy in our shop.
                </p>            
              </div>
            </div>
          
            <div className="WelcomePage__info">
              <div className="container">
              {
                products.map(({ name, description, images }, productIdx) => {
                  return (
                    <div className="product" key={productIdx}>
                      <img className="product__img" src={images[0].url} />
                      <div className="product__content">
                        <a href="#" className="product__content__name">{name}</a>
                        <h3 className="product__content__description">{description}</h3>
                      </div>
                    </div>
                  );
                })
              }
              </div>
            </div>
          </div>
        );
}

export default withRouter(Welcome);