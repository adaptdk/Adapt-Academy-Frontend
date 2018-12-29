import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  const { open, time } = props.item;
  const { lastItem, currency } = props;

  let change;
  if (lastItem && open) {
    change = (((open - lastItem.open) / open) * 100).toFixed(2);
  }

  const date = new Date(time * 1000);
  const fyear = date.getUTCFullYear();
  const fmonth =
    date.getUTCMonth() + 1 < 10
      ? '0' + (date.getUTCMonth() + 1)
      : date.getUTCMonth() + 1;
  const fday =
    date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate();
  const fhours =
    date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours();
  const fminutes =
    date.getUTCMinutes() < 10
      ? '0' + date.getUTCMinutes()
      : date.getUTCMinutes();

  const formattedDate = `${fyear}-${fmonth}-${fday} ${fhours}:${fminutes}`;

  let currencySign;
  if (currency === 'EUR') {
    currencySign = '€';
  }
  if (currency === 'USD') {
    currencySign = '$';
  }
  if (currency === 'GBP') {
    currencySign = '£';
  }

  return (
    <tr className="table__row">
      <td>{ formattedDate }</td>
      <td>
        { currencySign }
        { open.toFixed(2) }
      </td>
      <td>{ change ? change + '%' : '0%' }</td>
    </tr>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  lastItem: PropTypes.object,
  currency: PropTypes.string,
};
export default ListItem;
