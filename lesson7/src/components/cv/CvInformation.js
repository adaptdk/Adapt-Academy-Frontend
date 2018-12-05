import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

const CvInformation = ({ data }) => (
  <div className="cv-information">
    { map(data, (item, index) => (
      <div key={ index }>
        <p className="cv-information__label">{ item.label }</p>
        <p className="cv-information__value">{ item.value }</p>
      </div>
    )) }
  </div>
);

CvInformation.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CvInformation;
