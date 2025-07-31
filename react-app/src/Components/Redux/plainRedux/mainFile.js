import React from 'react';
import { connect } from 'react-redux';

function Counter({ count, increment, decrement }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>-</button>
    </div>
  );
}

// Map state from store to props
const mapStateToProps = (state) => ({
  count: state.count
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
