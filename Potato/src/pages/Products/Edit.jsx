import React, { useState } from 'react';
import { withRouter } from 'react-router';

import ApiFactory from '../../mock';

function Edit({ history, product }) {

  const [name, setName] = useState(product.name); 
  const [description, setDescription] = useState(product.description); 
  const [price, setPrice] = useState(product.price);

  function handleSubmit(e) {
    e.preventDefault();

    ApiFactory.getInstance().put(`/api/products/${product.id}`, { ...product, name, description, price }).then(() => {
        history.push('/Products');
      });
  }

  return (
    <div className='NewProduct'>
        <form className="NewProduct__form">
            <div className="NewProduct__form__field">
                <label>Product name</label>
                <input 
                placeholder="Product name..." 
                type="text" 
                onChange={ (e) => setName(e.target.value)}
                value={name}
                />
            </div>
            <div className="NewProduct__form__field">
                <label>Product desription</label>
                <input 
                placeholder="Tell more about your product..." 
                type="text" 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
            </div>
            <div className="NewProduct__form__field">
                <label>Product price</label>
                <input placeholder="Product price..." 
                type="number" 
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                />
            </div>
            <button className="button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default withRouter(Edit);