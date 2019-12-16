import React, { useState } from 'react';
import picture from '../../images/600x400.png';
import { withRouter } from 'react-router';

import ApiFactory from '../../mock';

function New({ history, product}) {

  const [isImage, setIsImage] = useState(false); 
  const [images, setImages] = useState([{name: "lol", url:picture}]);
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);


  function handleImageAdd(e) {
    e.preventDefault();
    setIsImage(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    ApiFactory.getInstance().post('/api/products', { id, name, description, price, images}).then(() => {
        history.push('/Products');
      });
  }

  return (
    <div className='NewProduct'>
        <form className="NewProduct__form">
            <div className="NewProduct__form__field">
                <label>Product name</label>
                <input placeholder="Product name..." type="text" onChange={ (e) => setName(e.target.value)}/>
            </div>
            <div className="NewProduct__form__field">
                <label>Product desription</label>
                <input placeholder="Tell more about your product..." type="text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="NewProduct__form__field">
                <label>Product price</label>
                <input placeholder="Product price..." type="number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className="NewProduct__form__field">
                <label>Product image</label>
                <div>
                    <input placeholder="Product image..." type="text"/>
                    <button className="button" onClick={handleImageAdd}>Add image</button>
                </div>
            </div>
            {
                isImage && (
                    <img 
                    className="NewProduct__form__field image" 
                    src={picture}
                    />
                )
            }
            
            <button className="button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default withRouter(New);