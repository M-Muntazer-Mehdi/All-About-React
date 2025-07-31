// src/Components/Redux/PlainReduxPage.js
import React from 'react';
import { Provider } from 'react-redux';
import { RKTStore } from './reduxToolkit/store';
import Counter from './reduxToolkit/rktRedux';

export default function RKTReduxPage() {
  return (
    <Provider store={RKTStore}>
      <h2>Redux toolkit Example</h2>
      <Counter />
    </Provider>
  );
}