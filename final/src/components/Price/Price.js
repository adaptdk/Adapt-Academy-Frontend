import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { 
  cryptoCurrencyPrice, 
  timeIntervalPrice, 
  currencyPrice, 
  initialValuesPrice as initial, 
} from '../../constants/options';
import { DropdownField } from '../Fields/Dropdown';
import { Field, reduxForm, getFormValues, getFormSyncErrors, Form } from 'redux-form';
import { connect } from 'react-redux';
import { getPriceData, updatePriceData } from '../../actions/priceAction';
import { bindActionCreators } from 'redux';

class Price extends React.Component {
  onSumbit = value => {
    const { 
      formValues,
      getPriceData, 
      updatePriceData 
    } = this.props;

    let values = {
      ...formValues,
      [value.name]: value.value,
    };

    const { timeInterval, currency } = values;

    updatePriceData(timeInterval, currency);
    getPriceData(values);  
  }

  componentDidMount() {
    const { getPriceData, updatePriceData } = this.props;
    const { timeInterval, currency } = initial;

    updatePriceData(timeInterval, currency);
    getPriceData(initial);
  }

  render() {
    const { data, index, text, type } = this.props;
    
    return (
      <Form>
        Choose time interval
        <Field
          name='timeInterval'
          type='number'
          component={ DropdownField }
          option={ timeIntervalPrice }
          onSubmit={ this.onSumbit }
          placeholder='Select Time Interval'
        />
        Choose crypto currency
        <Field
          name='cryptoCurrency'
          type='number'
          component={ DropdownField }
          option={ cryptoCurrencyPrice }
          onSubmit={ this.onSumbit }
          placeholder='Select Cryptocurrency'
        />
        Choose currency
        <Field
          name='currency'
          type='number'
          component={ DropdownField }
          option={ currencyPrice }
          onSubmit={ this.onSumbit }
          placeholder='Select Currency'
        />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date ({ text })</Table.HeaderCell>
              <Table.HeaderCell>Price ({ type })</Table.HeaderCell>
              <Table.HeaderCell>Change</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { data.map((item, itemIndex) => (
              itemIndex % index === 0 &&
                <Table.Row key={ item.id }>
                  <Table.Cell>{ item.time }</Table.Cell>
                  <Table.Cell>{ item.close }</Table.Cell>
                  <Table.Cell className = { (item.change).split('%')[0] < 0 ? 'negative-change' : 'positive-change' }>{ item.change }</Table.Cell>
                </Table.Row>
            )) }
          </Table.Body>
        </Table>
      </Form>
    );
  }
};

const mapStateToProps = state => ({
  formValues: getFormValues('priceForm')(state),
  formErrors: getFormSyncErrors('priceForm')(state),
  data: state.price.data,
  index: state.price.index,
  text: state.price.text,
  type: state.price.type,
  initialValues: {
    timeInterval: initial.timeInterval,
    cryptoCurrency: initial.cryptoCurrency,
    currency: initial.currency,
  },
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPriceData,
  updatePriceData,
}, dispatch);

const formConfig = {
  form: 'priceForm',
};

const propTypes = {
  formValues: PropTypes.object,
  data: PropTypes.object,
  text: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
  getPriceData: PropTypes.func,
  updatePriceData: PropTypes.func,
};

Price.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(Price));
