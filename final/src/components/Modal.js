import React from "react";

import "./Modal.scss";

const ErrorModal = React.memo(props => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="Modal">
        <h3 className="Modal__text">{props.children}</h3>
        <div className="Modal__button-container">
          <button
            className="Modal__button"
            type="button"
            onClick={props.onClose}
          >
            X
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
