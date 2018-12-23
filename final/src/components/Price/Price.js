import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { cryptoCurrency, timeInterval, currency, initialValuesPrice as initial } from '../../constants/options';
import { DropdownField } from '../Fields/Dropdown';
import { Field, reduxForm, getFormValues, getFormSyncErrors, Form } from 'redux-form';
import { connect } from 'react-redux';
import { getPrices } from '../API/API';
import filterPrice from './FilterPrice';

class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyType: initial.currency,
      timeType: this.findText(initial.timeInterval),
      data: [],
    };
  }

  onSumbit = () => {
    const { formValues } = this.props;
    this.setState({
      currencyType: formValues.currency,
      timeType: this.findText(formValues.timeInterval),
    });
    getPrices(formValues).then(properties => {
      this.setState({
        data: filterPrice(properties),
      });
    });
  }

  findText = text => {
    let goodText = '';

    timeInterval.map(item => {
      if (item.value === text) {
        goodText = item.text;
      }
    });

    return goodText;
  }

  componentDidMount() {
    getPrices(initial).then(properties => {
      this.setState({
        data: filterPrice(properties),
      });
    });
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    const { currencyType, timeType, data } = this.state;

    return (
      <Form onSubmit={ handleSubmit(() => this.onSumbit()) }>
        <Field
          name='timeInterval'
          type='number'
          component={ DropdownField }
          option={ timeInterval }
          placeholder='Select Time Interval'
        />
        <Field
          name='cryptoCurrency'
          type='number'
          component={ DropdownField }
          option={ cryptoCurrency }
          placeholder='Select Cryptocurrency'
        />
        <Field
          name='currency'
          type='number'
          component={ DropdownField }
          option={ currency }
          placeholder='Select Currency'
        />
        <Button 
          content="Submit" 
          loading={ submitting } 
          disabled={ submitting }
        />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date ({ timeType })</Table.HeaderCell>
              <Table.HeaderCell>Price ({ currencyType })</Table.HeaderCell>
              <Table.HeaderCell>Change</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { data.map(item => (
              <Table.Row key={ item.time }>
                <Table.Cell>{ item.time }</Table.Cell>
                <Table.Cell>{ item.close }</Table.Cell>
                <Table.Cell className = { (item.change).split('%')[0] < 0 ? 'negative-change' : 'positive-change'}>{ item.change }</Table.Cell>
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
  initialValues: {
    timeInterval: initial.timeInterval,
    cryptoCurrency: initial.cryptoCurrency,
    currency: initial.currency,
  },
});

const formConfig = {
  form: 'priceForm',
};

const propTypes = {
  formValues: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  data: PropTypes.object,
};

Price.propTypes = propTypes;

export default connect(mapStateToProps)(reduxForm(formConfig)(Price));
