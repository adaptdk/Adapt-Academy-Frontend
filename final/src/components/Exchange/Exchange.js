import React from 'react';
import { Button } from 'semantic-ui-react';
import { InputField } from '../Fields/Input';
import { DropdownField } from '../Fields/Dropdown';
import { DatePickerField } from '../Fields/Datepicker';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues, getFormSyncErrors, Form } from 'redux-form';
import { connect } from 'react-redux';
import BarChart from '../Charts/Bar';
import { bindActionCreators } from 'redux';
import { getExchangeData, updateExchangeData } from '../../actions/exchangeAction';
import { 
  DATE_FORMAT,
  currencyExchange,
  initialValuesExchange as initial,
} from '../../constants/options';

class Exchange extends React.Component {

  onSubmit = () => {
    const { 
      formValues, 
      formValues: { title }, 
      getExchangeData, 
      updateExchangeData, 
    } = this.props;

    updateExchangeData(title);
    return getExchangeData(formValues);
  }

  componentDidMount() {
    const { getExchangeData, updateExchangeData } = this.props;
    const { title } = initial;

    updateExchangeData(title);
    return getExchangeData(initial);
  }

  render() {
    const { 
      handleSubmit, 
      formValues, 
      submitting, 
      data,
      title,
    } = this.props;

    const fromTime = formValues ? new Date(formValues.from) : new Date();
    const toTime = formValues ? new Date(formValues.to) : new Date();

    const maxToTime = toTime;
    maxToTime.setDate(maxToTime.getDate() - 1);

    const maxFromTime = fromTime;
    maxFromTime.setDate(maxFromTime.getDate() + 1);


    return (
      <React.Fragment>
        <Form className="exchange-form" onSubmit={ handleSubmit(() => this.onSubmit()) }>
          <section className="exchange-form__title-section">
            <label>
              Choose Title For Chart
            </label>
            <Field
              name='title'
              type='string'
              autoComplete='title'
              component={ InputField }
              placeholder='Enter Line Chart Title'
            />
          </section>
          <section>
            <label>
              Choose currency
            </label>
            <Field
              name='currency'
              type='number'
              component={ DropdownField }
              option={ currencyExchange }
              placeholder='Select Currency'
            />
          </section>
          <section className='exchange-form__from-section'>
            <label>
              From
            </label>
            <Field
              name='from'
              type='string'
              component={ DatePickerField }
              dateFormat={ DATE_FORMAT }
              maxDate={ maxToTime }
            />
          </section>
          <section className='exchange-form__to-section'>
            <label>
              To
            </label>
            <Field
              name='to'
              type='string'
              component={ DatePickerField }
              dateFormat={ DATE_FORMAT }
              maxDate={ new Date() }
              minDate={ maxFromTime }
            />
          </section>
          <Button
            content='Update'
            disabled={ submitting }
            loading={ submitting }
          />
        </Form>
        <BarChart 
          title={ title }
          data={ data }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  formValues: getFormValues('exchangeForm')(state),
  formErrors: getFormSyncErrors('exchangeForm')(state),
  data: state.exchange.data,
  title: state.exchange.title,
  initialValues: {
    from: initial.from,
    to: initial.to,
    title: initial.title,
    currency: initial.currency,
  },
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getExchangeData,
  updateExchangeData,
}, dispatch);

const formConfig = {
  form: 'exchangeForm',
};

const propTypes = {
  formValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  getExchangeData: PropTypes.func,
  updateExchangeData: PropTypes.func,
  submitting: PropTypes.bool,
  data: PropTypes.object,
  title: PropTypes.string,
};

Exchange.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(Exchange));