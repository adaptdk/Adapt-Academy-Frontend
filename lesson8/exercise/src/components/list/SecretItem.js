import React from 'react';
import PasswordInput from './PasswordInput';

const SecretItem = (props) => {
  const { item, showItem, authorized, onPasswordChange, onPasswordSubmit, passwordValue } = props;
  let output;
  if (showItem) {
    output =
      <div>
        <h4 className="text-danger">{ item.label }
          <i onClick={ props.toggleValue } className="fas fa-chevron-up"></i>
        </h4>
        {/* Check if user is authorized to access this information - if yes render information, else render password input */ }
        { authorized ?
          (<div className="bg-danger text-light">
            { item.value.map(property => (
              <React.Fragment>
                <h4>{ Object.keys(property)[0] }</h4>
                <p>{ Object.values(property)[0] }</p>
              </React.Fragment>
            )) }
          </div>) :
          <PasswordInput onPasswordSubmit={ onPasswordSubmit } onPasswordChange={ onPasswordChange } passwordValue={ passwordValue } /> }
      </div >
  } else {
    output =
      <div>
        <h4 className="text-danger">{ item.label }
          <i onClick={ props.toggleValue } className="fas fa-chevron-down"></i>
        </h4>
      </div >
  }

  return output;
}

export default SecretItem;

