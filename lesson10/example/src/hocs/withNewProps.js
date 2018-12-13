import React from 'react';

const withNewProps = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          newProp="test"
          {...this.props}
        />
      );
    }
  }

  return HOC;
};

export default withNewProps;
