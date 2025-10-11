// src/Components/Redux/ReduxThunkPage.js
import React from 'react';
import { Provider } from 'react-redux';
import { thunkStore } from './reduxThunk/store';
import ReduxThunkCounter from './reduxThunk/reduxThunk';

export default function ReduxThunkPage() {
  return (
    <Provider store={thunkStore}>
      <h2>Redux Thunk Example</h2>
      <ReduxThunkCounter />
    </Provider>
  );
}
