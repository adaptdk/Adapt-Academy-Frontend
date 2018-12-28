import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, getFormValues } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCryptoData } from '../actions';
import { FORM_SUBMIT } from '../constants/actionTypes';

function mapStateToProps(state) {
  return { cryptoData: state.cryptoData,
    formValues: getFormValues('simple')(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    fetchCryptoData 
  }, dispatch);
}

class Dashboard3Container extends PureComponent {

  componentDidMount() {
    const { fetchCryptoData } = this.props;
    fetchCryptoData();
  }

  testt = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit((values) => {
      const action = () => {
        return {
        type: FORM_SUBMIT,
        payload: values}
      }
      // dispatch(action())
    })();
    ;

  };
  
  render() {
        const { pristine, reset, submitting } = this.props;
        let cryptoDatas = this.props.cryptoData;
        let met = Object.keys(cryptoDatas);
          console.log(this.props.formValues)
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
            { met.map((item, index) =>  
               <option key={ index } value={ item }>{ item }</option>
            )}
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
  submitting: PropTypes.bool,
  cryptoData: PropTypes.object,
  fetchCryptoData: PropTypes.func,
  formValues: PropTypes.object
};

Dashboard3Container = connect(mapStateToProps, mapDispatchToProps)(Dashboard3Container);

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  fields: ['inputfield', 'curency', 'date-to', 'date-from']
})(Dashboard3Container);