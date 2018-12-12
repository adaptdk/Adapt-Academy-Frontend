import React from 'react';
import PasswordInput from './PasswordInput';
import { connect } from 'react-redux';

const SecretItem = props => {
  const { item, showItem, authorized } = props;
  let output;
  if (showItem) {
    output = (
      <div>
        <h4 className="text-danger">
          {item.label}
          <i onClick={props.toggleValue} className="fas fa-chevron-up" />
        </h4>
        {/* Check if user is authorized to access this information - if yes render information, else render password input */}
        {authorized ? (
          <div className="bg-danger text-light">
            {item.value.map((property, key) => (
              <React.Fragment key={key}>
                <h4>{Object.keys(property)[0]}</h4>
                <p>{Object.values(property)[0]}</p>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <PasswordInput />
        )}
      </div>
    );
  } else {
    output = (
      <div>
        <h4 className="text-danger">
          {item.label}
          <i onClick={props.toggleValue} className="fas fa-chevron-down" />
        </h4>
      </div>
    );
  }

  return output;
};

const mapStateToProps = state => {
  return {
    authorized: state.authorized,
  };
};

export default connect(mapStateToProps)(SecretItem);
