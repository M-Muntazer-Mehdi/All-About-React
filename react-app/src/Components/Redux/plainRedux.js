// src/Components/Redux/PlainReduxPage.js
import React from 'react';
import { Provider } from 'react-redux';
import { plainStore } from './plainRedux/store';
import Counter from './plainRedux/plainredux';

export default function PlainReduxPage() {
  return (
    <Provider store={plainStore}>
      <h2>Plain Redux Example</h2>
      <Counter />
    </Provider>
  );
}