/**
 * Counter decrement handler.
 *
 * @param {Object} state
 *  State object.
 *
 * @return {Object}
 *  Updated state.
 */
const counterDecrementHandler = ({ count }) => ({
  count: count - 1,
});

export default counterDecrementHandler;
