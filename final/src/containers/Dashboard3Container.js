import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { createStore } from 'redux'

class Dashboard3Container extends Component {

  state = {
    value: ''
  }

  testt = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit((values) => {
      
      // this.setState({
      //   value: values
      // });
    })();
    ;
  };
  
  render() {
        const { pristine, reset, submitting } = this.props;
        console.log(this.state.value.curency);
        //let store = createStore(test);
    return(
      
      <div className="dashboard3">
        <div className="dashboard2__section dashboard2__section--left-link margin--small-bottom">
          <Link to="home">Go back</Link>
        </div>
        <form onSubmit={ this.testt }>
        <div>
          <label>Input field</label>
          <div>
            <Field
              name="inputfield"
              component="input"
              type="text"
              placeholder="Input field"
            />
          </div>
        </div>

        <div>
  
          <div>
          <Field name="curency" component="select">
              <option/>
              <option value="ff0000">Bit</option>
              <option value="00ff00">Lite</option>
              <option value="0000ff">Dogge</option>
            </Field>
          </div>
        </div>
        <div>
          <div>

          </div>
        </div>
        
        <div>
          <label>Date</label>
          <div>
            <Field name="date-from" component="input" type="date"/>
          </div>
          <div>
            <Field name="date-to" component="input" type="date"/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={ pristine || submitting }>
            Submit
          </button>
          <button type="button" disabled={ pristine || submitting } onClick={ reset }>
            Clear Values
          </button>
        </div>
      </form>
      </div>
    );
  }

}

Dashboard3Container.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(Dashboard3Container);