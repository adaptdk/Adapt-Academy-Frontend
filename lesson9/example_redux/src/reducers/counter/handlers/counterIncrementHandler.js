/**
 * Counter increment handler.
 *
 * @param {Object} state
 *  State object.
 *
 * @return {Object}
 *  Updated state.
 */
const counterIncrementHandler = ({ count }) => ({
  count: count + 1,
});

export default counterIncrementHandler;
