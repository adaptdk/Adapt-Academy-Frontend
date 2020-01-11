import React, { useState, useEffect } from 'react';
import ApiFactory from '../mock';

function Purchase () {
    const [products, setProducts] = useState([]);
    const [change, setChange] = useState(false);
    const [purchased, setPurchased] = useState(false);
    const [message, setMessage] = useState('No items yet.');

    useEffect(() => {
      setChange(false);
      ApiFactory.getInstance().get('/api/products')
      .then(({ data }) => {
      setProducts(data);
      })
      .catch((error) => {
          console.log('Could not fetch products from the API.');
      })
    }, [change]);

    function handleProductIncrease(product) {
        let count = product.count + 1;
        ApiFactory.getInstance().put(`/api/products/${product.id}`, { ...product, count });
        setChange(true);
    }

    function handleProductDecrease(product) {
        let count = product.count - 1;
        ApiFactory.getInstance().put(`/api/products/${product.id}`, { ...product, count });
        setChange(true);
    }

    function handleProductClear() {
        let newProducts = products;
        newProducts.forEach((product) => {
            product.count = 0;
        });
        setProducts(newProducts);
        setChange(true);
    }
    function handleProductBuy() {
        setPurchased(true);
        setMessage('Thanks for purchasing :)');
        handleProductClear();
    }

    return (
        <div className="Purchase">
        <p className="Purchase__message">
            {message}
        </p>
        {
            !purchased && (
                <div>
                <div className="Purchase__container">
                <div className="Purchase__container__row bold">
                    <div className="Purchase__container__row__item">
                        Name
                    </div>
                    <div className="Purchase__container__row__item">
                        Description
                    </div>
                    <div className="Purchase__container__row__item">
                        Count
                    </div>
                    <div className="Purchase__container__row__item">
                        Actions
                    </div>
                </div>
                {
                    products.map(( product, productIdx ) => {
                    if (product.count) return (
                        <div className="Purchase__container__row" key={productIdx}>
                            <div className="Purchase__container__row__item">
                                {product.name}
                            </div>
                            <div className="Purchase__container__row__item">
                                {product.description}
                            </div>
                            <div className="Purchase__container__row__item">
                                {product.count}
                            </div>
                            <div className="Purchase__container__row__item">
                                <div className="Purchase__buttons">
                                    <button className="Purchase__buttons__button green" onClick={() => {handleProductIncrease(product)}}>
                                        +
                                    </button>
                                    <button className="Purchase__buttons__button" onClick={() => {handleProductDecrease(product)}}>
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>    
                    );
                })
                }
            </div>
            <div className="Purchase__buttons">
                <button className="Purchase__buttons__button green" onClick={() => {handleProductBuy()}}>
                    Buy
                </button>
                <button className="Purchase__buttons__button" onClick={() => {handleProductClear()}}>
                    Clear cart
                </button>
            </div>
            </div>
            )
        }

    </div>
        );   
}

export default Purchase;