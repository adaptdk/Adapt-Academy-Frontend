import React, { useState, useEffect } from 'react';
import useIsMounted from 'ismounted';
import { withRouter } from 'react-router';
import ProductsView from './ProductsView';
import Admin from './Admin';

import ApiFactory from '../../mock';

function Product({ isAdmin, handleProductEdit }) {
  const [products, setProducts] = useState([]);
  const isMounted = useIsMounted();
    
    useEffect(() => {
      
        if(isMounted) {
            ApiFactory.getInstance().get('/api/products')
            .then(({ data }) => {
            setProducts([...data]);
            })
            .catch((error) => {
                console.log('Could not fetch products from the API.');
            });
        }
    }, [isMounted]);
    
    useEffect(() => {
      let newProducts = products;
      newProducts.forEach((product) => {product.price = 0});
      setProducts(newProducts);
    }, []);

    function handleProductDelete(productId) { 
        return function () {
          setProducts(products);
          ApiFactory.getInstance().delete(`/api/products/${productId}`)
            .then(({ data }) => { 
              setProducts([...data]); 
            });
        }
    }
    function handleProductAdd(product){ 
        return function(){
          product.count ? product.count++ : product.count = 1;
          ApiFactory.getInstance().put(`/api/products/${product.id}`, { ...product});
          setProducts([
            ...products,
          ]);
        }
    }

  return (
    <div className='products'>
        {
          isAdmin ? (
            <Admin
              products={products}
              handleProductDelete={handleProductDelete}
              handleProductEdit={handleProductEdit}
            />
          ) : (
            <ProductsView
              products={products}
              handleProductAdd={handleProductAdd}
            />
          )
        }
      </div>
  );
}

export default withRouter(Product);