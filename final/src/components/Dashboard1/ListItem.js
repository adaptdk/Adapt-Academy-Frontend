import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  const { close, time } = props.item;
  const { lastItem, currency } = props;

  let change = 0; //default value;
  if (lastItem && close) {
    change = (((close - lastItem.close) / close) * 100).toFixed(2);
    console.log(close, lastItem.close);
  }

  const date = new Date(time * 1000);
  const fyear = date.getFullYear();
  const fmonth =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const fday = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const fhours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const fminutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

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

  let changeCell;
  if (change > 0) {
    changeCell = (
      <td className="table__row__cell table__row__cell--up">
        &#8679;{ change }%
      </td>
    );
  }
  if (change < 0) {
    changeCell = (
      <td className="table__row__cell table__row__cell--down">
        &#8681;{ Math.abs(change) }%
      </td>
    );
  }
  if (change === 0) {
    changeCell = <td className="table__row__cell">{ change }%</td>;
  }

  return (
    <tr className="table__row">
      <td className="table__row__cell">{ formattedDate }</td>
      <td className="table__row__cell">
        { currencySign }
        { close.toFixed(2) }
      </td>
      { changeCell }
    </tr>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  lastItem: PropTypes.object,
  currency: PropTypes.string,
};
export default ListItem;