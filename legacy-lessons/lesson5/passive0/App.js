import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from '../components/Counter';
import * as CounterActions from '../actions/index';

const mapStateToProps = state => ({
  counter: state.counter,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
