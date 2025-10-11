import React from 'react';
import { connect } from 'react-redux';
import { incrementAsync } from './action';
import { decrementAsync } from './action';

function ReduxThunk({ count, incrementLater, decrementLater }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={incrementLater}>Increment After 1s</button>
      <button onClick={decrementLater}>Decrement After 1s</button>

    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  incrementLater: () => dispatch(incrementAsync()),
    decrementLater: () => dispatch(decrementAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk);