import React from 'react'

const PasswordInput = (props) => {
  const { onPasswordSubmit, onPasswordChange, passwordValue } = props;

  return (
    <form onSubmit={ onPasswordSubmit } className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <input
          onChange={ onPasswordChange }
          value={ passwordValue }
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
    </form>
  )
}

export default PasswordInput;
