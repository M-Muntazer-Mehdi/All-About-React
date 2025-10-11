import React from 'react';
import { connect } from 'react-redux';

function plainRedux({ count, increment, decrement }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>decrement</button>
    </div>
  );
}

// Map state from store to props
const mapStateToProps = (state) => ({
  count: state.count
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'Increment' }),
  decrement: () => dispatch({ type: 'Decrement' })
});

export default connect(mapStateToProps, mapDispatchToProps)(plainRedux);
